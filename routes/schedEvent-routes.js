const express    = require('express');
let router       = express.Router();
const helperFunc = require('../helper-func.js');

router.get('/schedEvents', (req, res) => {
    res.render('schedEvents');
});

module.exports = router;