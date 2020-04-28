async function pupulateResponseForCreateOrders(orders) {
    let ordersResponse = [];
    orders.forEach(order => {
        let itemWiseTotals = order.items.map(item => item.rate * item.totalCount);
        let totalPriceForOrder = itemWiseTotals.reduce((a, b) => a + b, 0);
        console.log('Total price for order ' + order.orderNumber + ' : ' + totalPriceForOrder);
        let singleOrderResponse = {
            "orderNumber": order.orderNumber,
            "orderDate": order.orderDate,
            "dueDate": order.dueDate,
            "customer": order.customer,
            "totalPrice": totalPriceForOrder
        };
        ordersResponse.push(singleOrderResponse);
    });
    return ordersResponse;
}

async function createSheetRowsFromOrderList(orders) {
    let sheetsRows = [];

    for (let i = 0; i < orders.length; i++) {
        let orderRows = await createSheetRowsFromOrder(orders[i]);
        sheetsRows = sheetsRows.concat(orderRows)
    }
    console.log('Number of rows appended : ' + sheetsRows.length);
    return sheetsRows;
}

async function createSheetRowsFromOrder(order) {
    let orderRows = [];
    const customer = order.customer;
    if (!order.status) {
        order.status = 'PENDING';
    }
    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        if (!item.finishedCount) {
            item.finishedCount = 0;
        }
        if (!item.returnCount) {
            item.returnCount = 0;
        }
        if (!item.remarks) {
            item.remarks = '';
        }

        const orderRow = [order.orderNumber, customer.customerName, customer.customerPhone, order.orderDate, order.dueDate, order.status,
            i + 1, item.itemName, item.ironOnly, item.rate, item.totalCount, item.finishedCount, item.returnCount, item.remarks];

        orderRows.push(orderRow);
    }
    return orderRows;
}

async function mapSheetRowsToOrderList(rows, storeName) {
    const groupedOrderRows = await createOrderRowsFromRows(rows);
    let orders = [];
    for (let i = 0; i < groupedOrderRows.length; i++) {
        let singleOrderModel = await createOrderFromRows(groupedOrderRows[i], storeName);
        orders.push(singleOrderModel)
    }
    return orders;
}

async function createItemsFromRows(rows) {
    let items = [];
    rows.forEach(row => {
        let item = {
            "seqNumber": row[6],
            "itemName": row[7],
            "ironOnly": row[8],
            "rate": row[9],
            "totalCount": row[10],
            "finishedCount": row[11],
            "returnCount": row[12],
            "remarks": row[13]
        };
        items = items.concat(item);
    });
    return items;
}

async function createOrderRowsFromRows(rows) {
    let groupedOrderRows = []; //groupsOrderRows = list of singleOrderRows
    for (let i = 1; i < rows.length;) {
        let singleOrderRows = []; // list of rows with same orderNumber
        for (let j = i; j < rows.length; j++) {
            if (singleOrderRows.length < 1) {
                singleOrderRows.push(rows[j]);
            }
            else if (singleOrderRows[0][0] === rows[j][0]) {
                singleOrderRows.push(rows[j]);
            }
            else {
                break;
            }
        }
        i = i + singleOrderRows.length;
        console.log('Grouped ' + singleOrderRows.length + ' rows for the bill number ' + singleOrderRows[0][0]);
        groupedOrderRows.push(singleOrderRows);
    }

    return groupedOrderRows;
}


async function createOrderFromRows(rows, storeName) {
    let customer = {
        "customerName": rows[0][1],
        "customerPhone": rows[0][2],
    };
    let items = await createItemsFromRows(rows);

    let singleOrder = {
        "storeName": storeName,
        "orderNumber": rows[0][0],
        "orderDate": rows[0][3],
        "dueDate": rows[0][4],
        "status": rows[0][5],
        "customer": customer,
        "items": items
    };

    return singleOrder;
}


exports.createSheetRowsFromOrderList = createSheetRowsFromOrderList;
exports.mapSheetRowsToOrderList = mapSheetRowsToOrderList;
exports.pupulateResponseForCreateOrders = pupulateResponseForCreateOrders;