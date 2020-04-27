

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
            } else {
                break;
            }
        }
        i = i + singleOrderRows.length;
        console.log('Grouped ' + singleOrderRows.length + ' rows for the bill number ' + singleOrderRows[0][0])
        groupedOrderRows.push(singleOrderRows);
    }

    return groupedOrderRows;
}


async function createOrderFromRows(rows, storeName) {
    let order = {
        "orderNumber": rows[0][0],
        "customerName": rows[0][1],
        "customerPhone": rows[0][2],
        "orderDate": rows[0][3],
        "dueDate": rows[0][4],
        "status": rows[0][5]
    };
    let items = await createItemsFromRows(rows);

    let singleOrder = {
        "storeName" : storeName,
        "order": order,
        "items": items
    };

    return singleOrder;
}


exports.mapSheetRowsToOrderList = mapSheetRowsToOrderList;