const express    = require('express');
let router       = express.Router();
let dateClicked  = 0; //Find another way to pass the id of the date that is clicked
let db;

let helperFunc  = require('../helper-func.js');

router.get('/day', (req, res) => {
	// Reference : https://stackoverflow.com/questions/26278077/node-js-get-id-of-href-in-app-js
	let date    = req.query.id;
	dateClicked = date;
	let events  = helperFunc.getAllEvents().then( ( event ) => {
	/*
	Query the databse and retrieve all events scheduled in October. Then use the id
	from the route to get the events scheduled on the day that was clicked by user. 
	Then pass the object to the handler of the day page.
	*/
	    let eventsSchedOnDay = event.October.days[date];
	    res.render('day', { date : date, eventsSchedOnDay : eventsSchedOnDay });
	}, ( error ) => {
		console.log('error :', error);
	});
});

router.post('/scheduleEvent', (req, res) => {
	helperFunc.createEvent(req, dateClicked);
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), 
		        month: helperFunc.getCurrMonth() } );
});

module.exports = router;