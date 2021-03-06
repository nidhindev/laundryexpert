const express = require('express');
const app = express();
const healthCheck = require('./src/healthcheck/controller');
const orderController = require('./src/order/orderController')
const invoiceController = require('./src/invoice/controller')
const http = require('http').createServer(app);
const body_parser = require('body-parser');
const { port } = require('./config');
const auth = require('./src/google-client/auth');
const cron = require("node-cron");
const businessConfig = require('./src/business/businessConfig');
const businessController  = require('./src/business/businessController');

const properties = {
    port: process.env.PORT || 3000,
};
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());
app.use(express.static('dist'));
app.use('/infra/healthcheck', healthCheck);
app.use('/order', orderController);
app.use('/document', invoiceController);
app.use('/business', businessController);

//app.use('/**', express.static('dist'));

cron.schedule("*/58 * * * *", function () {
    console.log("running a task every 58 minute");
    auth.setUpGoogleAuth();
});

http.listen(properties.port, () => {
    auth.setUpGoogleAuth();
    businessConfig.getConfig();
    console.log('server is running on port ' + properties.port);
});


