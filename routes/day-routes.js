const express = require('express');
const connectStr = 'mongodb://localhost:27017/calendar';
let MongoClient = require('mongodb').MongoClient;
let router = express.Router();
let cDate = 0; //Find another way to pass the id of the date that is clicked
let db;

let helperFunc = require('../helper-func.js');

MongoClient.connect(connectStr, (err, database)=>{
    if (err) throw err;
    console.log("Successfully connected to the database");
    db = database;
});

router.get('/day', (req, res) => {
	// Reference : https://stackoverflow.com/questions/26278077/node-js-get-id-of-href-in-app-js
	let date = req.query.id;
	cDate = date;
	req.body.date = date;
	console.log("This is the date in day-routes", date);
	res.render('day', { date : date });
});

router.post('/scheduleEvent', (req, res) => {
	let startTime   = req.body.startTime;
	let endTime     = req.body.endTime;
	let descriptOfEvent = req.body.description;
	let newEvent = {};
	let field = "October.days." + cDate;
	newEvent["October.days." + cDate] = {start : startTime, end: endTime, description : descriptOfEvent };
	let username = "radesh0430";
	db.collection('profile').update( { username : username }, { $push :  newEvent });
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), month: helperFunc.getCurrMonth()});
});

module.exports = router;