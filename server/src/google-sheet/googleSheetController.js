const express = require('express');
const router = express.Router();
const googleSheetFindService = require('./googleSheetFindService');
const googleSheetUpdateService = require('./googleSheetUpdateService')
const googleSheetPricingService = require('./googleSheetPricingService')

router.get('/customer', (req, res) => {
  googleSheetFindService.getSheet(req.query.id, req.query.selectedStore, req.query.searchBy).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});
router.put('/update', (req, res) => {
  googleSheetUpdateService.updateSheet(req.body).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

router.get('/pricing', (req, res) => {
  googleSheetPricingService.getConfig().then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});
module.exports = router;