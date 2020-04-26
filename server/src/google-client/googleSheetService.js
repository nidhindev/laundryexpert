const {google} = require('googleapis');
const {spreadsheetId} = require('../../config');
const {gcpChache} = require("../cache/appCache");


async function getSheet(sheetName) {
    const client = gcpChache.get('gcpClient');
    const sheets = google.sheets('v4');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: sheetName
    });
    return sheetResponse
}

async function addRows(body) {
    const sheets = google.sheets('v4');
    const selectedStore = body.store;
    const client = gcpChache.get('gcpClient');
    const sheetResponse = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: spreadsheetId,
        range: selectedStore
    });
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

async function updateRowByIndex(body, sheetMeta) {
    const sheets = google.sheets('v4');
    const client = gcpChache.get('gcpClient');
    const request = {
        spreadsheetId: spreadsheetId,
        range: `${sheetMeta.sheetName}!${sheetMeta.startcolum}${sheetMeta.startIndex}:${sheetMeta.endColumm}${sheetMeta.endIndex}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            majorDimension: "ROWS",
            values: body
        },
        auth: client,
    };
    await sheets.spreadsheets.values.update(request)
}

async function deleteRowsFromTop(selectedStore, rows) {
    try {
        const sheets = google.sheets('v4');
        const client = gcpChache.get('gcpClient');

        const getrequest = {
            spreadsheetId: spreadsheetId,
            range: `${selectedStore}!A2:L${rows + 1}`,
            auth: client,
        };
        //get values from shopsheet
        const response1 = await sheets.spreadsheets.values.get(getrequest);

        const addrequest = {
            spreadsheetId: spreadsheetId,
            range: `archive`,
            auth: client,
            valueInputOption: 'USER_ENTERED',
            resource: {
                majorDimension: "ROWS",
                values: response1.data.values
            },
        };
        //add values to archive sheet
        const response2 = await sheets.spreadsheets.values.append(addrequest);
        const deleteRequest1 = {
            "requests": [
                {
                    "deleteDimension": {
                        "range": {
                            "sheetId": 675620284,
                            "dimension": "ROWS",
                            "startIndex": 1,
                            "endIndex": rows + 1
                        }
                    }
                }]
        };

        const deleteRequest = {
            spreadsheetId: spreadsheetId,
            resource: deleteRequest1,
            auth: client
        };
        //delete rows from shopsheet
        const response3 = await sheets.spreadsheets.batchUpdate(deleteRequest);

        return response3.data.values;
    }
    catch (err) {
        console.error(err);
        return err;
    }
}

exports.getSheet = getSheet;
exports.addRows = addRows;
exports.updateRowByIndex = updateRowByIndex;
exports.deleteRowsFromTop = deleteRowsFromTop;