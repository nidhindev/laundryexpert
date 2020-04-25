const {configChache} = require ("../cache/appCache");

async function getConfig() {
    return configChache.get('config');
}
exports.getConfig = getConfig;
