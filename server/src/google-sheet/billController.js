const express = require('express');
const router = express.Router();
const invoiceFinderService = require('./billFinderService');
const invoiceUpdatorService = require('./billUpdatorService');
const configService = require('./configService');

router.get('/customer', (req, res) => {
    invoiceFinderService.getSheet(req.query.id, req.query.selectedStore, req.query.searchBy).then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(result).status(200);
    });
});

router.put('/update', (req, res) => {
    invoiceUpdatorService.updateSheet(req.body).then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(result).status(200);
    });
});

router.get('/pricing', (req, res) => {
    configService.getConfig().then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(result).status(200);
    });
});


router.get('/archive', (req, res) => {
    googleSheetService.getStore("Veloor").then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(result).status(200);
    });
});


module.exports = router;