const express    = require('express');
let router       = express.Router();

let helperFunc   = require('../helper-func.js');

router.get('/', ( req, res ) => {
    res.render('login');
});

router.post('/calendarView', ( req, res ) => {
	let currDay = helperFunc.getCurrDay();
	let currDate = helperFunc.getCurrDate();
	let currMonth = helperFunc.getCurrMonth();
	res.render( 'month', { day: currDay, date: currDate, month: currMonth } );
})

module.exports = router;