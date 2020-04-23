var { JWT } = require('google-auth-library');
const { google } = require('googleapis');
const NodeCache = require("node-cache");
const { spreadsheetId, creds } = require('../../config');
const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });
const configChache = new NodeCache({ stdTTL: 86400, checkperiod: 86400, });

async function getConfig() {
    var keys = JSON.parse(creds);
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    }
    var client = null;
    var configJs = '';

    if (gcpChache.has('gcpClient')) {
        client = gcpChache.get('gcpClient')
    } else {
        console.log('calling google auth')
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set('gcpClient', client);
    }
    if (configChache.has('config')) {
        configJs = configChache.get('config')
    } else {
        console.log('calling config sheet')
        const config = await sheets.spreadsheets.values.get({
            auth: client,
            spreadsheetId: spreadsheetId,
            range: 'Config'
        });
        configJs = await createConfig(config.data.values)
        configChache.set('config', configJs);
    }
    return configJs;
}
async function createConfig(rows) {
    var configJs = []
    for (var i = 1; i < rows.length; i++) {
        var configJ = {
            'key': rows[i][0].trim(),
            'value': parseFloat(rows[i][1].trim())
        }
        configJs.push(configJ);
    }
    return configJs
}
exports.getConfig = getConfig;
