const { gcpChache, configChache } = require("../cache/appCache");
const { google } = require('googleapis');
const { spreadsheetId } = require('../../config');
const googleSheetService = require('./googleSheetService');


async function getConfig() {
    console.log('calling config sheet to get config')
    const config = await googleSheetService.getSheet('Config');
    const businessConfig = await createConfigFromSheetRows(config.data.values)
    configChache.set('config', businessConfig);
    console.log(businessConfig)
}

async function createConfigFromSheetRows(rows) {
    var configJs = []
    for (var i = 1; i < rows.length; i++) {
        var configJ = {
            'key': rows[i][0].trim(),
            'value': parseFloat(rows[i][1].trim())
        }
        configJs.push(configJ);
    }
    return configJs
}

exports.getConfig = getConfig;