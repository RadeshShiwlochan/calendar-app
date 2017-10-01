const express    = require('express');
let router       = express.Router();

const helperFunc = require('../helper-func.js');

//pass object here to the view
router.get('/schedEvents', (req, res) => {
    let allEvents = helperFunc.getAllEvents();
    for ( var event in allEvents )
        console.log("this is the event " , allEvents[event]);
        allEvents = {
        	one: 
        	    [
        			{
        				start: "5:00:PM",
        				end: "6:00:PM",
        				des: "party"
        			},
        			{
        				start: "8:00:AM",
        				end: "10:00:PM",
        				des: "watch tv"
        			}
        		],
        	two: [],
        	three: 
        	   [ 
                  {
                  	   start: "7:00:AM",
                  	   end: "8:00:PM",
                  	   des: "sleep"
                  }

             	]		
        }	
    res.render('schedEvents', { allEvents: allEvents });
});

module.exports = router;