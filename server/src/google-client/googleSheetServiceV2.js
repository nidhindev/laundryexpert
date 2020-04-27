const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");
const googleUtils = require("./googleUtilsForOrder");

async function getOrdersFromStore(storeName) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');

    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: storeName
    });

    const orders = await googleUtils.mapSheetRowsToOrderList(sheetResponse.data.values, storeName);
    return orders;
}


async function createOrder(sheetName, orders) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');

    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: sheetName
    });

    //const orders = await googleUtils.mapSheetRowsToOrderList(sheetResponse.data.values);
    return orders;
}

exports.getOrdersFromStore = getOrdersFromStore;
exports.createOrder = createOrder;