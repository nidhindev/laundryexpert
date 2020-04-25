const NodeCache = require("node-cache");

module.exports = {
    gcpChache : new NodeCache({ stdTTL: 3500, checkperiod: 3600, }),
    configChache: new NodeCache({ stdTTL: 86400, checkperiod: 86400, })
}