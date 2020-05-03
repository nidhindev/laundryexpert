const express = require('express');
const router = express.Router();
const orderRetrivalService = require('./orderRetrivalService');
const orderUpdateService = require('./orderUpdateService');
const orderArchiveService = require('./orderArchiveService');
const orderUpdateServiceV2 = require('./orderUpdateServiceV2');

router.get('/customer', (req, res) => {
  orderRetrivalService.getSheet(req.query.id, req.query.selectedStore, req.query.searchBy).then(result => {
    res.json(result).status(200);
  });
});
router.put('/update', (req, res) => {
  orderUpdateService.updateSheet(req.body).then(result => {
    res.json(result).status(200);
  });
});

router.get('/archive', (req, res) => {
  orderArchiveService.archiveSheet('testshop').then(result => {
    res.json(result).status(200);
  });
});

router.get('/v2', (req, res) => {
  orderRetrivalService.getOrders(req.query.storeName, req.query.orderNumber, req.query.customerPhone).then(result => {
    res.json(result).status(200);
  });
});

router.post('/v2', (req, res) => {
  orderUpdateServiceV2.createOrder(req.body).then(result => {
    res.json(result).status(result.status);
  });
});


router.put('/v2', (req, res) => {
  orderUpdateServiceV2.updateOrder(req.body).then(result => {
    res.json(result).status(result.status);
  });
});


// eg: v2/status?storeName=testsheet&status=DELIVERED&orderNumber=1002
router.put('/v2/status', (req, res) => {
  orderUpdateServiceV2.updateOrderAsDelivered(req.query.storeName, req.query.orderNumber, req.query.status).then(result => {
    res.json(result).status(result.status);
  });
});


module.exports = router;