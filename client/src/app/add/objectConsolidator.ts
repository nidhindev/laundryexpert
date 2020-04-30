import { Sheet, Shop, Customer, Item } from './model'

export function sheetUpdator(shop: Shop, customer: Customer, items: Array<Item>): Sheet {
    let details: Array<Array<any>> = [];
    for (let i in items) {
        let row: Array<any> = [];
        row.push(shop.invoice, customer.name, customer.phoneNumber, new Date(shop.date).toLocaleDateString("en-US"), null, 'PENDING', null,
            items[Number(i)].name, items[Number(i)].isIroning, items[Number(i)].rate, items[Number(i)].quantity, null, null, items[Number(i)].remark)
        details.push(row)
    }
    let sheet: Sheet = {
        store: shop.shopName,
        values: details
    }
    return sheet
}