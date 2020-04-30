const express = require('express');
const router = express.Router();
const orderRetrivalService = require('./orderRetrivalService');
const orderUpdateService = require('./orderUpdateService');
const orderArchiveService = require('./orderArchiveService');
const orderUpdateServiceV2 = require('./orderUpdateServiceV2');

router.get('/customer', (req, res) => {
  orderRetrivalService.getSheet(req.query.id, req.query.selectedStore, req.query.searchBy).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});
router.put('/update', (req, res) => {
  orderUpdateService.updateSheet(req.body).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

router.get('/archive', (req, res) => {
  orderArchiveService.archiveSheet('testshop').then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

router.get('/order/v2', (req, res) => {
  orderRetrivalService.getOrders(req.query.storeName, req.query.orderNumber, req.query.customerPhone).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

router.post('/order/v2', (req, res) => {
  orderUpdateServiceV2.createOrder(req.body).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(result.status);
  });
});


router.put('/order/v2', (req, res) => {
  orderUpdateServiceV2.updateOrder(req.body).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(result.status);
  });
});

module.exports = router;