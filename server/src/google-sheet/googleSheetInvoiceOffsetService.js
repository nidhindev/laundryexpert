const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const { gcpChache, configChache } = require("../cache/appCache");

async function findOffset(selectedStore) {
    var client = gcpChache.get('gcpClient')
    const sheets = google.sheets('v4');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: 'Meta'
    });
    return await convertOffset(sheetResponse.data.values);
}
async function convertOffset(values) {
    console.log('rows: '+JSON.stringify(values))
    return offset = {
        veloor: Number(values[1][1].trim()),
        velappa: Number(values[2][1].trim()),
        mgKavu: Number(values[3][1].trim())
    }
}

exports.findOffset = findOffset;