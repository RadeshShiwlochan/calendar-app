const express = require('express');
const connectStr = 'mongodb://localhost:27017';
let MongoClient = require('mongodb').MongoClient;
let router = express.Router();
let db;

let helperFunc = require('../helper-func.js');

MongoClient.connect(connectStr, (err, database)=>{
    if (err)
    	throw err;
    console.log("Successfully connected to the database");
    db = database;
});


router.get('/day', (req, res) => {
	// Reference : https://stackoverflow.com/questions/26278077/node-js-get-id-of-href-in-app-js
	let date = req.query.id;
	console.log("This is the date in day-routes", date);
	res.render('day', { date : date });
});

router.post('/scheduleEvent', (req, res) => {
	let startTime = req.body.startTime;
	let endTime = req.body.endTime;
	console.log("this is the startTime ", startTime);
	console.log("this is the endTime ", endTime);
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), month: helperFunc.getCurrMonth()});
});

module.exports = router;