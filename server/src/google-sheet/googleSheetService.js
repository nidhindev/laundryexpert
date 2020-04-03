const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./gcpconfig.json');
const doc = new GoogleSpreadsheet('17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8');


async function getSheet() {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; 
    const rows = await sheet.getRows();
    var customers = []
    for (i = 0; i < rows.length; i++) {
        var model = {
            name: rows[i].Name,
            billNumber: rows[i].BillNumber,
            phoneNumber: rows[i].PhoneNumber,
            status: rows[i].Status,
            remark: rows[i].Remark,
        }
        customers.push(model);
    }
    return customers;
}

exports.getSheet = getSheet;
