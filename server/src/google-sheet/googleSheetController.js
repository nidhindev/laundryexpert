const express = require('express');
const router = express.Router();
const googleSheetService = require('./googleSheetService');

router.get('/', (req, res) => {
  googleSheetService.getSheet(req.query.phoneNumber, req.query.selectedStore).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

module.exports = router;