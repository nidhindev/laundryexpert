const express = require('express');
const router = express.Router();
const orderRetrivalService = require('./orderRetrivalService');
const orderUpdateService = require('./orderUpdateService');
const orderArchiveService = require('./orderArchiveService');

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

router.get('/v2', (req, res) => {
  orderRetrivalService.getSheetV2().then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

module.exports = router;