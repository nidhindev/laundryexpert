const express = require('express');
const app = express();
const healthCheck = require('./src/healthcheck/controller');
const googleSheet = require('./src/google-sheet/googleSheetController')
const invoiceController = require('./src/invoice/controller')
const http = require('http').createServer(app);
const body_parser = require('body-parser');
const { port } = require('./config');
const NodeCache = require("node-cache");
var { JWT } = require('google-auth-library');
const { creds } = require('./config');

console.log(`Your port is ${process.env.PORT}`);
const properties = {
    port: process.env.PORT || 3000,
};
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());
app.use(express.static('dist'));
app.use('/infra/healthcheck', healthCheck);

const gcpChache = new NodeCache({ stdTTL: 3500, checkperiod: 3600, });
const configChache = new NodeCache({ stdTTL: 86400, checkperiod: 86400, });

let cacheMiddleware = (req, res, next) => {
    var keys = JSON.parse(creds);
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    }
    var client = null;
    if (gcpChache.has('gcpOauth')) {
        console.log('cache from server')
        client = gcpChache.get('gcpOauth')
    } else {
        console.log('calling google auth from server')
        client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        gcpChache.set('gcpOauth', client);
    }
    next();
}
app.use('/googlesheet', googleSheet);
app.use('/document', invoiceController);
app.use('/**', express.static('dist'));


http.listen(properties.port, () => {
    console.log('server is running on port ' + properties.port);
});
