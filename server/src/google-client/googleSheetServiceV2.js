const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");
const googleUtils = require("./googleUtilsForOrder");

async function getSheet(sheetName) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');

    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: sheetName
    });

    const orders = await googleUtils.mapSheetRowsToOrderList(sheetResponse.data.values)
    let response = {
        "shopName": sheetName,
        "orders": orders
    };

    return response;
}

exports.getSheet = getSheet;