const express = require('express');
const app = express();
const healthCheck = require('./src/healthcheck/controller');
const googleSheet = require('./src/google-sheet/googleSheetController')
const invoiceController = require('./src/invoice/controller')
const http = require('http').createServer(app);
const body_parser = require('body-parser');
const { port } = require('./config');
const path = require('path')
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
app.use('/googlesheet', googleSheet);
app.use('/document', invoiceController);
app.use('/shipment-status', express.static('dist'));
app.options("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

http.listen(properties.port, () => {
    console.log('server is running on port ' + properties.port);
});
