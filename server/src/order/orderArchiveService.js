const googleSheetService = require('../google-client/googleSheetService');

async function archiveSheet(selectedStore) {

    let response = await googleSheetService.getSheet(selectedStore);
    let rows = response.data.values;
    let numberOfRowsToDelete = findNumberOfRowsToDelete(rows);
    if(numberOfRowsToDelete>0){
        let response1 = await googleSheetService.deleteRowsFromTop('testshop', numberOfRowsToDelete)
    }
}

function findNumberOfRowsToDelete(rows) {
    let numberOfRowsToDelete = 0;
    rows.map(function (r) {
        let orderDate = r[2];
        let pattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
        orderDate = new Date(orderDate.replace(pattern,'$3-$1-$2'));

        let currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        if((currentDate-orderDate)>(30 * 24 * 60 * 60 * 1000))
            numberOfRowsToDelete++;
    });
    return numberOfRowsToDelete
}

exports.archiveSheet = archiveSheet;
