const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        status: 'ok'
    }).status(200);
});
module.exports = router;
