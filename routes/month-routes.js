const express = require('express');
const router = express.Router();
const helperFunc = require('../helper-func.js');

router.get('/', (req, res) => {
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), month: helperFunc.getCurrMonth() });
});

module.exports = router;