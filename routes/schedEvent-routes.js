const express    = require('express');
let router       = express.Router();

const helperFunc = require('../helper-func.js');

//pass object here to the view
router.get('/schedEvents', (req, res) => {
    let events = helperFunc.getAllEvents()
    .then(function(eventObj) {
    	console.log(eventObj.October.days);
    	let allEvents = eventObj.October.days;
    	res.render('schedEvents', { allEvents: allEvents });
    }, function(error) {
    	console.log('error: ', error);
    });    
});

module.exports = router;