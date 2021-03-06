function createEstimatedCostFromItems(items) {
    let itemWiseTotals = items.map(item => item.rate * item.totalCount);
    let totalEstimatedPriceForOrder = itemWiseTotals.reduce((a, b) => a + b, 0);
    return totalEstimatedPriceForOrder
}

function createActualCostFromItems(items) {
    let itemWiseTotals = items.map(item => item.rate * item.finishedCount);
    let totalActualPriceForOrder = itemWiseTotals.reduce((a, b) => a + b, 0);
    return totalActualPriceForOrder
}

async function populateResponseForCreateOrders(orders) {
    let ordersResponse = [];
    orders.forEach(order => {
        let singleOrderResponse = {
            'orderNumber': order.orderNumber,
            'orderDate': order.orderDate,
            'dueDate': order.dueDate,
            'customer': order.customer,
            'estimatedCost': createEstimatedCostFromItems(order.items)
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
    return sheetsRows;
}

async function findRowNumberForOrder(sheetsRows, order) {
    for (let i = 0; i < sheetsRows.length; i++) {
        if (sheetsRows[i][0] === order.orderNumber) {
            return i + 1
        }
    }
    return -1;
}

async function createSheetRowsFromOrder(order) {
    let orderRows = [];
    const customer = order.customer;
    if (order.status === 'DELIVERED') {
        order.deliveredDate = new Date().toISOString();
    }
    else {
        order.deliveredDate = ''
    }

    console.log(order.deliveredDate);
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
        } else {
            item.remarks = item.remarks.join(); //conver list to comma seperated string
        }

        const orderRow = [order.orderNumber, customer.customerName, customer.customerPhone, order.orderDate, order.dueDate, order.deliveredDate,
            i + 1, item.itemName, item.ironOnly, item.rate, item.totalCount, item.finishedCount, item.returnCount, item.remarks];

        orderRows.push(orderRow);
    }
    return orderRows;
}

async function mapSheetRowsToOrderList(rows, storeName) {
    const groupedOrderRows = await createOrderRowsFromRows(rows);    // group rows based on the orders with unique orderNumber
    let orders = [];
    for (let i = 0; i < groupedOrderRows.length; i++) {
        let singleOrderModel = await createOrderFromRows(groupedOrderRows[i], storeName);
        orders.push(singleOrderModel)
    }
    return orders;
}

async function createItemsFromRows(rows) {
    let items = [];
    let status = 'DONE';
    rows.forEach(row => {
        let itemStatus = '';
        if (+row[10] === ((+row[11]) + (+row[12]))) {   //Converting char to int by add '+' infront
            itemStatus = 'DONE';
        }
        else {
            itemStatus = 'PENDING';
        }

        let remarks = '';
        if( row[13]){
            remarks = row[13].split(','); //spliting comma separated remarks to array
        }
        // Adding + at the beginning convert the field to number
        let item = {
            'seqNumber': +row[6],
            'itemName': row[7],
            'ironOnly': row[8],
            'rate': +row[9],
            'totalCount': +row[10],
            'finishedCount': +row[11],
            'returnCount': +row[12],
            'remarks': remarks,
            'itemStatus': itemStatus
        };
        items = items.concat(item);

        if(itemStatus === 'PENDING'){
            status = itemStatus;
        }
    });

    let itemsResult = {
        'items': items,
        'status': status
    };
    return itemsResult;
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
        groupedOrderRows.push(singleOrderRows);
    }

    return groupedOrderRows;
}

async function createOrderFromRows(rows, storeName) {
    let customer = {
        'customerName': rows[0][1],
        'customerPhone': rows[0][2],
    };
    let status = '';
    let deliveredDate = null;

    let itemsResult = await createItemsFromRows(rows);

    let singleOrder = {
        'storeName': storeName,
        'orderNumber': rows[0][0],
        'orderDate': rows[0][3],
        'dueDate': rows[0][4],
        'deliveredTime': rows[0][5],
        'status': rows[0][5].length > 7 ? 'DELIVERED' : itemsResult.status,
        'customer': customer,
        'items': itemsResult.items,
        'estimatedCost': createEstimatedCostFromItems(itemsResult.items),
        'actualCost': createActualCostFromItems(itemsResult.items)
    };

    return singleOrder;
}


exports.createSheetRowsFromOrderList = createSheetRowsFromOrderList;
exports.mapSheetRowsToOrderList = mapSheetRowsToOrderList;
exports.populateResponseForCreateOrders = populateResponseForCreateOrders;
exports.findRowNumberForOrder = findRowNumberForOrder;