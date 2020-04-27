const googleSheetService = require('../google-client/googleSheetService')
const googleSheetServiceV2 = require('../google-client/googleSheetServiceV2')
const { configChache } = require("../cache/appCache");

async function getSheet(id, selectedStore, searchBy) {
    let sheetResponse = await googleSheetService.getSheet(selectedStore);
    const result = await process(sheetResponse);
    if (searchBy == 'billNumber') {
        return result.filter(customer => customer.billNumber.toLowerCase() == id.toLowerCase())
    } else {
        return result.filter(customer => customer.phoneNumber == id)
    }
}

async function getOrders(storeName, orderNumber, customerPhone) {
    let orders = await googleSheetServiceV2.getOrdersFromStore(storeName);
    if(orderNumber){
        console.log('Filtering for orderNumber : ' + orderNumber)
        orders = orders.filter(order => order.order.orderNumber === orderNumber);
    } else if (customerPhone){
        console.log('Filtering for customerPhone : ' + customerPhone)
        orders = orders.filter(order => order.order.customerPhone === customerPhone);
    }

    let response = {
        "orders": orders
    };
    return response
}

async function process(response) {
    const config = configChache.get('config').pricing
    const rows = response.data.values
    var customer = {
        billNumber: '',
        name: '',
        date: '',
        dueDate: '',
        phoneNumber: '',
        items: [],
        total: 0
    }
    var items = [];
    var customers = [];
    var total = 0;
    for (var i = 1; i < rows.length; i++) {

        if (rows[i][0] !== '') {
            customer = {
                billNumber: rows[i][0].trim(),
                name: rows[i][1].trim(),
                date: rows[i][2].trim(),
                dueDate: rows[i][9],
                phoneNumber: rows[i][8].trim(),
            }
        }
        const item = {
            name: rows[i][3].trim(),
            totalPieces: rows[i][4].trim(),
            finishedPieces: rows[i][5].trim(),
            damagedPieces: rows[i][6].trim(),
            status: rows[i][7].trim(),
        }
        total = total + (parseInt(item.finishedPieces) * config.find(config => config.key == rows[i][3].trim()).value);
        items.push(item);
        if (
            (typeof rows[i + 1] == 'undefined') ||
            (rows[i][0] == '' && (typeof rows[i + 1] !== 'undefined' && rows[i][0] !== rows[i + 1][0])) ||
            (rows[i][0] !== '' && (typeof rows[i + 1] !== 'undefined' && rows[i][0] !== rows[i + 1][0] && rows[i + 1][0] !== '')) ||
            (rows[i][0] == '' && (typeof rows[i + 1] !== 'undefined' && rows[i + 1][0] !== ''))
        ) {
            customer.items = items;
            customer.total = total;
            customers.push(customer);
            items = [];
            customer = {
                billNumber: '',
                name: '',
                date: '',
                dueDate: '',
                phoneNumber: '',
                total: 0,
                items: []
            }
        }
    }
    return customers
}

exports.getSheet = getSheet;
exports.getOrders = getOrders;
