const express    = require('express');
let router       = express.Router();
let MongoClient = require('mongodb').MongoClient;
const connectStr = 'mongodb://localhost:27017/calendar';
let db;

const helperFunc = require('../helper-func.js');

//pass object here to the view
router.get('/schedEvents', (req, res) => {
	// let eventsInOct = db.collection('profile').findOne({ username: "radesh0430"});
	// let dayObj = eventsInOct.days;
	// for ( var day in dayObj) {
	// 	console.log(dayObj[day]);
	// }
    res.render('schedEvents');
});

module.exports = router;