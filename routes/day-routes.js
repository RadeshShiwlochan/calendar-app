const express = require('express');
const connectStr = 'mongodb://localhost:27017/calendar';
let MongoClient = require('mongodb').MongoClient;
let router = express.Router();
let cDate = 0; //Find another way to pass the id of the date that is clicked
let db;

let helperFunc = require('../helper-func.js');

router.get('/day', (req, res) => {
	// Reference : https://stackoverflow.com/questions/26278077/node-js-get-id-of-href-in-app-js
	let date = req.query.id;
	cDate = date;
	res.render('day', { date : date });
});

router.post('/scheduleEvent', (req, res) => {
	let newEvent = helperFunc.createEvent(req, cDate);
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), month: helperFunc.getCurrMonth()});
});

module.exports = router;