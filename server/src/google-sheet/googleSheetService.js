var { JWT } = require('google-auth-library');
const keys = require('./gcpconfig.json');
const { google } = require('googleapis');
const NodeCache = require("node-cache");

const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });

const spreadsheetId = '17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8'
async function getSheet() {
    //console.log(JSON.stringify(keys));
    //GoogleAuth.fromJSON() 
    /**
     * const keysEnvVar = process.env['CREDS'];
if (!keysEnvVar) {
  throw new Error('The $CREDS environment variable was not found!');
}
const keys = JSON.parse(keysEnvVar);
  const client = auth.fromJSON(keys);

     */
    var client = null;
    if (gcpChache.has("gcpClient")) {
        console.log('chache')
        client = gcpChache.get('gcpClient')
    } else {
        console.log('new');
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set("gcpClient", client);
    }
    sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: 'Sheet1'
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
        } else {
            console.log('Movie list from Google Sheets:', JSON.stringify(response));

        }
    });
}


exports.getSheet = getSheet;
