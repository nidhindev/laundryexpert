const googleSheetService = require('./googleSheetService');

async function updateSheet(body) {
    return googleSheetService.addRows(body);
}

exports.updateSheet = updateSheet;
