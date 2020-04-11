const express = require('express');
const router = express.Router();
const googleSheetService = require('./googleSheetService');

router.get('/', (req, res) => {
  googleSheetService.getSheet(req.query.id, req.query.selectedStore, req.query.searchBy).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
});

module.exports = router;