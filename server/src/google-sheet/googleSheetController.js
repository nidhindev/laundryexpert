const express = require('express');
const router = express.Router();
const googleSheetService = require('./googleSheetService');


router.get('/', (req, res) => {

    googleSheetService.getSheet().then(result => {
      res.setHeader('Content-Type', 'application/json');
     res.send(result).status(200);
   })
   //res.setHeader('Content-Type', 'application/json');
   //res.send('[{"name":"Ammu","billNumber":"787878BGHJ","phoneNumber":"9789821252","status":"In Progress"},{"name":"qqqq","billNumber":"jbkjkjkjjkj","phoneNumber":"5348758798","status":"yeyyey"},{"name":"jbnnjnkj","billNumber":"bjhjk","phoneNumber":"87875908","status":"oj9ipo"}]').status(200)
   
});


module.exports = router;