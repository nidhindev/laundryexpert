const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");


async function getSheet(sheetName) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');

    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: sheetName
    });

    const responseObject = await createResponseModel(sheetResponse.data.values, sheetName)
    return responseObject
}

async function createItemsFromRows(rows) {
    let items = [];
    rows.forEach(row => {
        let item = {
            "seqNumber": row[6],
            "itemName": row[7],
            "ironOnly": row[8],
            "rate": row[9],
            "totalCount": row[10],
            "finishedCount": row[11],
            "returnCount": row[12],
            "remarks": row[13]
        };
        items = items.concat(item);
    });
    return items;
}

async function createResponseModel(rows, sheetName) {
    const groupedOrderRows = await createOrderRowsFromRows(rows);
    let orders = [];
    for (let i = 0; i < groupedOrderRows.length; i++) {
        let singleOrderModel = await createOrderFromRows(groupedOrderRows[i]);
        orders.push(singleOrderModel)
    }

    let response = {
        "shopName": sheetName,
        "orders": orders
    };
    console.log(response);
    return response;
}


async function createOrderRowsFromRows(rowsFromSheet) {
    let rows = rowsFromSheet;
    let groupedOrderRows = []; //groupsOrderRows = list of singleOrderRows
    for (let i = 1; i < rows.length;) {
        let singleOrderRows = []; // list of rows with same orderNumber
        for (let j = i; j < rows.length; j++, i++) {
            if (singleOrderRows.length < 1) {
                singleOrderRows.push(rows[j]);
            }
            else if (singleOrderRows[0][0] === rows[j][0]) {
                singleOrderRows.concat('SingleOrderRows length more than 1');
                singleOrderRows.push(rows[j]);
            }
        }
        groupedOrderRows.push(singleOrderRows);
    }

    return groupedOrderRows;
}


async function createOrderFromRows(rows) {
    let order = {
        "orderNumber": rows[0][0],
        "customerName": rows[0][1],
        "customerPhone": rows[0][2],
        "orderDate": rows[0][3],
        "dueDate": rows[0][4],
        "status": rows[0][5]
    };
    let items = await createItemsFromRows(rows);

    let singleOrder = {
        "order": order,
        "items": items
    };

    return singleOrder;
}


exports.getSheet = getSheet;