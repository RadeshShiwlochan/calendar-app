const express = require('express');
let router = express.Router();
const helperFunc = require('../helper-func.js');

router.get('/month', (req, res) => {
	let currDay = helperFunc.getCurrDay();
	let currDate = helperFunc.getCurrDate();
	let currMonth = helperFunc.getCurrMonth();
	res.render('month', { day: currDay, date: currDate, month: currMonth });
});

module.exports = router;