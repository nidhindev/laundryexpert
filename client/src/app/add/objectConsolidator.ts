import { Sheet, Shop, Customer, Item } from './model'

export function sheetUpdator(shop: Shop, customer: Customer, items: Array<Item>): Sheet {
    let details: Array<Array<any>> = [];
    for (let i in items) {
        let row: Array<any> = [];

        if (Number(i) == 0) {
            console.log("value od i: " + i)
            row.push(shop.invoice, customer.name, new Date(shop.date).toLocaleDateString("en-US"), items[Number(i)].name, items[Number(i)].quantity,
                null, null, 'Accepted', customer.phoneNumber, null, items[Number(i)].rate, items[Number(i)].remark)
        } else {
            row.push(null, null, null, items[Number(i)].name, items[Number(i)].quantity,
                null, null, 'Accepted', null, null, items[Number(i)].rate, items[Number(i)].remark)
        }
        details.push(row)
    }
    let sheet: Sheet = {
        store: shop.shopName,
        values: details
    }
    return sheet
}