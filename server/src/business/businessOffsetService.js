const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const { gcpChache } = require("../cache/appCache");

async function findOffset() {
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
    var offsets = []
    for (var i = 1; i < values.length; i++) {
        var offset = {
            'key': values[i][0].trim(),
            'value': parseInt(values[i][1].trim())
        }
        offsets.push(offset);
    }
    return offsets
}

exports.findOffset = findOffset;