const express = require('express');
let router = express.Router();

router.get('/day', (req, res) => {
	let date = req.query.id;
	console.log("This is the date in day-routes", date);
	res.render('day', { date : date });
});

module.exports = router;