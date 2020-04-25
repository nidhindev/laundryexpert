const { gcpChache, configChache } = require("../cache/appCache");
const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');


async function getConfig() {
    console.log('calling config sheet to get config')
    var client = gcpChache.get('gcpClient')
    const sheets = google.sheets('v4');
    const config = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: 'Config'
    });
    const businessConfig = await createConfig(config.data.values)
    configChache.set('config', businessConfig);
    console.log(JSON.stringify(businessConfig))

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