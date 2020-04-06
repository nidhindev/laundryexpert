var { JWT } = require('google-auth-library');
const keys = require('./gcpconfig.json');
const { google } = require('googleapis');
const NodeCache = require("node-cache");

const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });

//const spreadsheetId = '17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8'
//const spreadsheetId = '1-b3XumjzheSnSKYD2oShGKGaRTiysOUQ7gDGBaoZuvM' // jithu
const spreadsheetId = '1AmP5g-6p7X5dH9BStdYVodtXrHSETEZkQud0Il0Po0U'
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
            console.log('Movie list from Google Sheets:', JSON.stringify(response.data.values.length));
            const rows = response.data.values
            for(var i=1; i <= response.data.values.length; i++) {
                var model = {
                    billNUmber: rows[i].Bill_Number,
                    name: rows[i].Name,
                    date: rows[i].Received_Date,
                    item: rows[i].Item,
                    totalPieces: rows[i].No_Of_Pieces,
                    finishedPieces: rows[i].Finished_Pieces,
                    status: rows[i].Status,
                    phoneNumber: rows[i].Mobile_Number ,
                }
            }

        }
    });
}


exports.getSheet = getSheet;
