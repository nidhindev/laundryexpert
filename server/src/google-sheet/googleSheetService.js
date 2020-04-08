var { JWT } = require('google-auth-library');
const keys = require('./gcpconfig.json');
const { google } = require('googleapis');
const NodeCache = require("node-cache");

const sheets = google.sheets('v4');
const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });

//const spreadsheetId = '17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8'
//const spreadsheetId = '1-b3XumjzheSnSKYD2oShGKGaRTiysOUQ7gDGBaoZuvM' // jithu
const spreadsheetId = '1AmP5g-6p7X5dH9BStdYVodtXrHSETEZkQud0Il0Po0U'
async function getSheet() {
    //console.log(JSON.stringify(keys));
    //GoogleAuth.fromJSON() 
    /**
     * const keysEnvVar = process.env['CREDS'];
if (!keysEnvVar) {
  throw new Error('The $CREDS environment variable was not found!');
}
const keys = JSON.parse(keysEnvVar);76y7787h
  const client = auth.fromJSON(keys);

     */
    var client = null;
    if (gcpChache.has("gcpClient")) {
        console.log('chache')
        client = gcpChache.get('gcpClient')
    } else {
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set("gcpClient", client);
    }
    var customers = [];
    await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: 'Sheet1'
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
        } else {
            const rows = response.data.values
            var customer = {
                billNumber: '',
                name: '',
                date: '',
                phoneNumber: '',
                items: []

            }
            var items = [];
            for (var i = 1; i <= rows.length; i++) {
                if (typeof rows[i] == 'undefined') {
                    //customer.items = items;
                    customers.push(customer);
                    items = [];
                    customer = {
                        billNumber: '',
                        name: '',
                        date: '',
                        phoneNumber: '',
                        items: []
                    }

                }
                else {
                    if (customer.billNumber) {
                        if (typeof rows[i + 1] !== 'undefined' &&
                            rows[i + 1][0]) {
                            //customer.items = items;
                            customers.push(customer);
                            customer = {
                                billNumber: '',
                                name: '',
                                date: '',
                                phoneNumber: '',
                                items: []
                            }
                            items = [];
                        }
                        


                    } else {
                        // console.log('customers: ' + JSON.stringify(customers))
                        // var test = customers.pop()
                        // test.items.push(items)
                        // customers.push(test)

                        // console.log('customers updated: ' + customers)
                        // items = []
                         console.log('items: ' + JSON.stringify(items))
                    }
                    const item = {
                        name: rows[i][3],
                        totalPieces: rows[i][4],
                        finishedPieces: rows[i][5],
                        status: rows[i][6],
                    }
                    items.push(item);
                    customer.items = items
                    if (rows[i][0]) {
                        customer = {
                            billNumber: rows[i][0],
                            name: rows[i][1],
                            date: rows[i][2],
                            phoneNumber: rows[i][7],
                        }
                    }
                }
            }
console.log('cust: '+JSON.stringify(customers))
        }
        return customers
    });
    
}


exports.getSheet = getSheet;
