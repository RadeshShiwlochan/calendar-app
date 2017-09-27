const express = require('express');
const connectStr = 'mongodb://localhost:27017';
let MongoClient = require('mongodb').MongoClient;
let router = express.Router();
let db;

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

module.exports = router;