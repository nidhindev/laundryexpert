const businessOffsetService = require('../business/businessOffsetService')
const googleSheetService = require('../google-client/googleSheetServiceV2')
const googleSheetServiceV1 = require('../google-client/googleSheetService')

async function createOrder(body) {

    for (let i = 0; i < body.orders.length; i++) {
        const selectedStore = body.orders[i].storeName;
        let offsets = await businessOffsetService.findOffset();
        const invoiceNumber = await createInvoiceNumber(offsets, selectedStore);
        body.orders[i].orderNumber = invoiceNumber;
    }
    return await googleSheetService.createOrder(body.orders);
}


async function updateOrder(body) {
    return await googleSheetService.updateOrder(body.orders);
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
        case 'testsheet': {
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
    await googleSheetServiceV1.updateRowByIndex([[offset]], sheetMeta);
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
        case 'testsheet': {
            shopIndex = 5;
            break
        }
    }
    return shopIndex;
}
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
