const express = require('express');
const router = express.Router();
const {generatePdf} = require('./invoiceGenerator')
const path = require('path')
router.get('/invoice/generate', (req, res) => {
    generatePdf()
    res.send({
        status: 'ok'
    }).status(200);
});
router.get('/invoice/', (req, res) => {
    const invoicePath = path.resolve("dist/invoice.pdf");
    res.sendFile(invoicePath)
});
module.exports = router;
