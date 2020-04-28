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

async function createOrder(orders) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');

    let sheetOrders = await googleUtils.createSheetRowsFromOrderList(orders);

    const addrequest = {
        spreadsheetId: spreadsheetId,
        range: orders[0].storeName,
        auth: client,
        valueInputOption: 'USER_ENTERED',
        resource: {
            majorDimension: "ROWS",
            values: sheetOrders
        },
    };
    //add values to archive sheet
    const sheetResponse = await sheets.spreadsheets.values.append(addrequest);
    let priceDetails = await googleUtils.pupulateResponseForCreateOrders(orders);
    let response = {
        'status': sheetResponse.status,
        'orders': priceDetails
    };

    return response;
}

exports.getOrdersFromStore = getOrdersFromStore;
exports.createOrder = createOrder;