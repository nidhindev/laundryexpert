const express = require('express');
const router = express.Router();
const googleSheetService = require('./googleSheetService');


router.get('/', (req, res) => {

    googleSheetService.getSheet().then(result => {
        res.send(result).status(200);
    })
});


module.exports = router;