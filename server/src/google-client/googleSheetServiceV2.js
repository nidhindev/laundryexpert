const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");
const googleUtils = require("./googleUtilsForOrder");

const sheets = google.sheets('v4');

async function getOrdersFromStore(storeName) {
    const client = gcpChache.get('gcpClient');

    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: storeName
    });

    const orders = await googleUtils.mapSheetRowsToOrderList(sheetResponse.data.values, storeName);
    return orders;
}

async function getOrdersWithCustomerPhoneFromStore(storeName, customerPhone) {
    let orders = await getOrdersFromStore(storeName);
    orders = orders.filter(order => order.customer.customerPhone === customerPhone);
    return orders;
}


async function getOrderWithOrderNumberFromStore(storeName, orderNumber) {
    let orders = await getOrdersFromStore(storeName);
    orders = orders.filter(order => order.orderNumber.toLowerCase() === orderNumber.toLowerCase());
    return orders;
}

async function updateOrderAsDelivered(storeName, orderNumber) {
    let orders = await getOrderWithOrderNumberFromStore(storeName, orderNumber);

    if (orders.length > 0) {
        orders[0].status = 'DELIVERED';
        let result = await updateOrder(orders);
        return result
    }
}

async function updateOrder(orders) {
    let sheetRowsForOrders = await googleUtils.createSheetRowsFromOrderList(orders);
    const client = gcpChache.get('gcpClient');

    const existingSheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: orders[0].storeName
    });

    let updateResponse = [];
    for (let i = 0; i < orders.length; i++) {

        let rowNumber = await googleUtils.findRowNumberForOrder(existingSheetResponse.data.values, orders[i]);
        let range = orders[i].storeName + '!A' + rowNumber;
        console.log(range);

        const updateRequest = {
            spreadsheetId: spreadsheetId,
            range: range,
            auth: client,
            valueInputOption: 'USER_ENTERED',
            resource: {
                majorDimension: "ROWS",
                values: sheetRowsForOrders
            },
        };

        //add values to archive sheet
        const sheetResponse = await sheets.spreadsheets.values.update(updateRequest);
        let response = {
            'status': sheetResponse.status,
            'order': orders[i].orderNumber
        };
        updateResponse.push(response);
    }

    let responses = {
        'response': updateResponse
    };
    return responses;

}

async function createOrder(orders) {
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
    let priceDetails = await googleUtils.populateResponseForCreateOrders(orders);
    let response = {
        'status': sheetResponse.status,
        'orders': priceDetails
    };

    return response;
}

exports.getOrdersFromStore = getOrdersFromStore;
exports.getOrdersWithCustomerPhoneFromStore = getOrdersWithCustomerPhoneFromStore;
exports.getOrderWithOrderNumberFromStore = getOrderWithOrderNumberFromStore;
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.updateOrderAsDelivered = updateOrderAsDelivered;