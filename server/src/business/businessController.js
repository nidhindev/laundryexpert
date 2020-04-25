const express = require('express');
const router = express.Router();
const businessPricingService = require('./businessPricingService')

router.get('/', (req, res) => {
    businessPricingService.getConfig().then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.json(result).status(200);
    });
  });

  module.exports = router;