var { JWT } = require('google-auth-library');
//const keys = require('./gcpconfig.json');
const { google } = require('googleapis');
const NodeCache = require("node-cache");
const { spreadsheetId, creds } = require('../../config');
const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });
const configChache = new NodeCache({ stdTTL: 86400, checkperiod: 86400, });

async function getSheet(id, selectedStore, searchBy) {
    var keys = JSON.parse(creds);
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    }
    var client = null;
    var configJs = '';

    if (gcpChache.has(`gcpClient-${selectedStore}`)) {
        console.log('chache')
        client = gcpChache.get(`gcpClient-${selectedStore}`)
    } else {
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set(`gcpClient-${selectedStore}`, client);
    }
    if (configChache.has('config')) {
        console.log('config cache')
        configJs = configChache.get('config')
        console.log(configJs)
    } else {
        const config = await sheets.spreadsheets.values.get({
            auth: client,
            spreadsheetId: spreadsheetId,
            range: 'Config'
        });
        configJs = await createConfig(config.data.values)
        configChache.set('config', configJs);
    }
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    })
    const result = await process(sheetResponse, configJs);
    if (searchBy == 'billNumber') {
        return result.filter(customer => customer.billNumber == id)
    } else {
        return result.filter(customer => customer.phoneNumber == id)
    }

}

async function createConfig(rows) {
    var configJs = []
    for (var i = 1; i < rows.length; i++) {
        var configJ = {
            'key': rows[i][0].trim(),
            'value': parseFloat(rows[i][1].trim())
        }
        configJs.push(configJ);
    }
    return configJs
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

async function undefinedRow() {

}
exports.getSheet = getSheet;
