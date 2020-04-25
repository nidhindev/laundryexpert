const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const { gcpChache } = require("../cache/appCache");
const googleSheetInvoiceOffsetService = require('./googleSheetInvoiceOffsetService')


async function updateSheet(body) {
    const selectedStore = body.store;
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    });
    var offsets = await googleSheetInvoiceOffsetService.findOffset()
    const invoiceNumber = await createInvoiceNumber(offsets, selectedStore);
    body.values[0][0] = invoiceNumber
    const request = {
        spreadsheetId: spreadsheetId,
        range: `${selectedStore}!A${sheetResponse.data.values.length + 1}:L${sheetResponse.data.values.length + 1 + body.values.length}`,  // TODO: Update placeholder value.
        valueInputOption: 'USER_ENTERED',
        includeValuesInResponse: true,
        resource: {
            majorDimension: "ROWS",
            range: `${selectedStore}!A${sheetResponse.data.values.length + 1}:L${sheetResponse.data.values.length + 1 + body.values.length}`,
            values: body.values
        },
        auth: client,
    };
    try {
        const response = (await sheets.spreadsheets.values.update(request)).data;
        return response
    } catch (err) {
        console.error(err);
        return err;
    }
}
async function createInvoiceNumber(offsets, store) {
    switch (store) {
        case 'Veloor': {
            await updateOffset(store, offsets.find(offset => offset.key == store).value + 1);
            return `VR${offsets.find(offset => offset.key == store).value}`;
        }
        case 'Velappaya': {
            await updateOffset(store, offsets.find(offset => offset.key == store).value + 1);
            return `VA${offsets.find(offset => offset.key == store).value}`;
        }
        case 'MgKavu': {
            await updateOffset(store, offsets.find(offset => offset.key == store).value + 1);
            return `MU${offsets.find(offset => offset.key == store).value}`;

        }
    }
}
async function updateOffset(store, offset) {
    const sheets = google.sheets('v4');
    const shopIndex = await findShopIndex(store);
    const client = gcpChache.get('gcpClient');
    const request = {
        spreadsheetId: spreadsheetId,
        range: `Meta!B${shopIndex}:B${shopIndex}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            majorDimension: "ROWS",
            values: [[offset]]
        },
        auth: client,
    };
    await sheets.spreadsheets.values.update(request)
}

async function findShopIndex(store) {
    var shopIndex
    switch (store) {
        case 'Veloor': {
            shopIndex = 2;
            break
        }
        case 'Velappaya': {
            shopIndex = 3;
            break
        }
        case 'MgKavu': {
            shopIndex = 4;
            break
        }
    }
    return shopIndex;
}
exports.updateSheet = updateSheet;
