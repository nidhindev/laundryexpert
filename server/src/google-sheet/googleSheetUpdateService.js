const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const { gcpChache } = require("../cache/appCache");

async function updateSheet(body) {
    const selectedStore = body.store;
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    });
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
