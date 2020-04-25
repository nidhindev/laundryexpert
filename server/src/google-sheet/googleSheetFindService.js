const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const {gcpChache, configChache} = require ("../cache/appCache");

async function getSheet(id, selectedStore, searchBy) {
    var client = gcpChache.get('gcpClient')  
    const sheets = google.sheets('v4');  
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    });
    businessConfig = configChache.get('config')
    const result = await process(sheetResponse, businessConfig);
    if (searchBy == 'billNumber') {
        return result.filter(customer => customer.billNumber.toLowerCase() == id.toLowerCase())
    } else {
        return result.filter(customer => customer.phoneNumber == id)
    }
}

async function process(response, config) {
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