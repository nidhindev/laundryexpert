const express = require('express');
const app = express();
const healthCheck = require('./src/healthcheck/controller');
const googleSheet = require('./src/google-sheet/googleSheetController')
const http = require('http').createServer(app);
const body_parser = require('body-parser');
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
app.use('/shipment-status', express.static('dist'));

http.listen(properties.port, () => {
    console.log('server is running on port '+ properties.port);
});
