const businessOffsetService = require('../business/businessOffsetService')
const googleSheetService = require('../google-client/googleSheetService')

async function updateSheet(body) {
    const selectedStore = body.store;
    var offsets = await businessOffsetService.findOffset()
    const invoiceNumber = await createInvoiceNumber(offsets, selectedStore);
    for (var i = 0; i < body.values.length; i++) {
        body.values[i][0] = invoiceNumber
    }
    return await googleSheetService.addRows(body, selectedStore);
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
    const shopIndex = await findShopIndex(store);
    let sheetMeta = {
        sheetName: 'Meta',
        startcolum: 'B',
        startIndex: shopIndex,
        endColumm: 'B',
        endIndex: shopIndex
    }
    await googleSheetService.updateRowByIndex([[offset]], sheetMeta);
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
