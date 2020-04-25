const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");


async function getSheet(sheetName) {
    const client = gcpChache.get('gcpClient');
    const sheets = google.sheets('v4');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: sheetName
    });
    return sheetResponse
}

async function addRows(body) {
    const sheets = google.sheets('v4');
    const selectedStore = body.store;
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

async function updateRowByIndex(body, sheetMeta) {
    const client = gcpChache.get('gcpClient');
    const request = {
        spreadsheetId: spreadsheetId,
        range: `${sheetMeta.sheetName}!${sheetMeta.startcolum}${sheetMeta.startIndex}:${sheetMeta.endColumm}${sheetMeta.endIndex}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            majorDimension: "ROWS",
            values: body
        },
        auth: client,
    };
    await sheets.spreadsheets.values.update(request)
}

exports.getSheet = getSheet;
exports.addRows = addRows;
exports.updateRowByIndex = updateRowByIndex;