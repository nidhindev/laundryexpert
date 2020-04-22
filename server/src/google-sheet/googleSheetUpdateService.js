var { JWT } = require('google-auth-library');
const { google } = require('googleapis');
const NodeCache = require("node-cache");
const { spreadsheetId, creds } = require('../../config');
const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });

async function updateSheet(body) {
    const selectedStore = body.store
    var keys = JSON.parse(creds);
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    }
    var client = null;
    if (gcpChache.has(`gcpClient-${selectedStore}`)) {
        client = gcpChache.get(`gcpClient-${selectedStore}`)
    } else {
        console.log('calling google auth')
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set(`gcpClient-${selectedStore}`, client);
    }
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    })
    const request = {
        spreadsheetId: spreadsheetId,
        range: `${selectedStore}!A${sheetResponse.data.values.length + 1}:L${sheetResponse.data.values.length + 1 + body.values.length}`,  // TODO: Update placeholder value.
        valueInputOption: 'USER_ENTERED',
        resource: {
            majorDimension: "ROWS",
            range: `${selectedStore}!A${sheetResponse.data.values.length + 1}:L${sheetResponse.data.values.length + 1 + body.values.length}`,
            values: body.values
        },

        auth: client,
    };
    try {
        const response = (await sheets.spreadsheets.values.update(request)).data;
        return response
    } catch (err) {
        console.error(err);
        return err;
    }
}
exports.updateSheet = updateSheet;
