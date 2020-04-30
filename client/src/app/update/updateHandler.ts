import { FormGroup } from '@angular/forms';
import { Item, Order, Customer, OrderModel } from '../model';

export function consolidateUpdateRequest(customerFormGroup: FormGroup, orderFormGroup: FormGroup,
    customerData: FormGroup): OrderModel {

    let customer: Customer = {
        customerName: customerFormGroup.value.name,
        customerPhone: customerFormGroup.value.phoneNumber
    }
    let items = [];
    for (let it of orderFormGroup.value.items) {
        let item: Item = {
            ironOnly: it.ironOnly,
            rate: it.rate,
            totalCount: it.totalCount,
            finishedCount: it.finishedCount,
            itemName: it.itemName,
            remarks: it.remarks,
            returnCount: it.returnCount,
            seqNumber: it.seqNumber
        };
        items.push(item);
    }
    let order: Order = {
        customer: customer,
        items: items,
        orderDate: customerFormGroup.value.date,
        orderNumber: customerFormGroup.value.billNumber,
        status: customerFormGroup.value.status,
        storeName: customerData.value.selectedStore,
        dueDate: customerFormGroup.value.dueDate
    }
    let orderModel: OrderModel = {
        orders: [order]
    }
    return orderModel;
}