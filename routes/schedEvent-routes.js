const express    = require('express');
let router       = express.Router();

const helperFunc = require('../helper-func.js');

/*
 Query the database to get all the events for the month of October. By design
 the profile object that stores the events for the specific days is stored under
 the key days as an object of arrays. Therefore allEvents is set to this object,
 and pass to the schedEvents handler.
*/   
router.get('/schedEvents', ( req, res ) => {
    let events = helperFunc.getAllEvents().then(function( eventObj ) {
    	let allEvents = eventObj.October.days;
    	res.render('schedEvents', { allEvents: allEvents });
    }, function(error) { console.log( 'error: ', error ); });    
});

module.exports = router;