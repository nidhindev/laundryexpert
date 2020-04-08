const express = require('express');
const router = express.Router();
const googleSheetService = require('./googleSheetService');
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 86400, checkperiod: 3600, });


router.get('/', (req, res) => {
  googleSheetService.getSheet(req.query.phoneNumber).then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(result).status(200);
  });
  // if (myCache.has("googleSheetData")) {
  //   filterCustomer(req.query.phoneNumber, myCache.get('googleSheetData')).then(data => {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.send(data).status(200);
  //   });
  // } else {
  //   googleSheetService.getSheet().then(result => {
  //     myCache.set("googleSheetData", result, 3600)
  //     filterCustomer(req.query.phoneNumber, result).then(data => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.send(data).status(200);
  //     });
  //   });
  // }
});

async function filterCustomer(phoneNumber, data) {
  var customers = []
  for (i = 0; i < data.length; i++) {
    if (phoneNumber == data[i].phoneNumber) {
      var model = {
        name: data[i].name,
        billNumber: data[i].billNumber,
        phoneNumber: data[i].phoneNumber,
        status: data[i].status,
        remark: data[i].remark,
      }
      await customers.push(model);
    }
  }
  return customers;
}

module.exports = router;