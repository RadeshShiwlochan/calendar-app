let numToWords   = require('number-to-words'); 
let wordsToNum   = require('words-to-num');
let MongoClient  = require('mongodb').MongoClient;
let db;
const connectStr = 'mongodb://localhost:27017/calendar';


MongoClient.connect( connectStr, ( err, database )=>{
    if ( err ) throw err;
    console.log( "Successfully connected to the database" );
    db = database;
});

let getCurrDay = () => {
    let currentDay = new Date();
    let daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday" ];
    return daysOfWeek[ currentDay.getDay() ];
}

let getCurrDate = () => {
	let currentDay = new Date();
	return currentDay.getDate();
}

let getCurrMonth = () => {
	/*
	used the following as a reference for solving this problem:
	https://stackoverflow.com/questions/1643320/get-month-name-from-date
	*/
    let currentDay = new Date();
	let currentMonth = currentDay.getMonth();
	let monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];
	return monthNames[ currentMonth ];                  
}

//takes an number as an argument and returns the spelling of that number.
let numberSpelling = ( num ) => { return numToWords.toWords( num ); }

//creates a profile object for a new user. 
let createProfile = () => {
	let profile = {
		"username": "JohnDoe",
		"October": {
			"number": 10,
			"days": {
				"one": [],
				"two": [],
				"three":[],
				"four": [],
				"five":[],
				"six":[],
				"seven":[],
				"eight":[],
				"nine":[],
				"ten":[],
				"eleven":[],
				"twelve":[],
				"thirteen":[],
				"fourteen":[],
				"fifteen":[],
				"sixteen":[],
				"seventeen":[],
				"eighteen":[],
				"nineteen":[],
				"twenty":[],
				"twenty-one":[],
				"twenty-two":[],
				"twenty-three":[],
				"twenty-four":[],
				"twenty-five":[],
				"twenty-six":[],
				"twenty-seven":[],
				"twenty-eight":[],
				"twenty-nine":[],
				"thirty":[],
				"thirty-one":[]
			}
		}
	};
	getAllEvents().then( ( user ) => {
       if ( user == undefined ) {
           db.collection('profile').insertOne(profile);
       } else if (user !== undefined && user.username !== "JohnDoe" ) {
       	   db.collection('profile').insertOne(profile);
       }
    }, ( error ) => { console.log( 'error: ', error ); }); 
}

/*
 This function creates an object of an event that a user creates for a the day 
 the user clicked on.
*/
let createEvent = ( res, req, cDate ) => {
	//Reference used: https://stackoverflow.com/questions/27513504/push-to-mongodb-array-using-dynamic-key
	let username = "JohnDoe";
	let startTime   = req.body.startTime;
	let endTime     = req.body.endTime;
	let descriptOfEvent = req.body.description;
	let newDateStr = cDate.replace(/-/g, " ");
	let dateNum = wordsToNum.convert( newDateStr );
	let newEvent = {};
	if ( startTime.substring( 0, 2 ) === "00" || 
		 endTime.substring( 0, 2 ) === "00"     ) {
	     return;
	}
	newEvent["October.days." + cDate] = { date: dateNum, start : startTime, end: endTime, description : descriptOfEvent };
	db.collection('profile').update( { username : username }, { $push :  newEvent });
}

/*
 Querying for profile object results in a promise returned. This functions resolves 
 the promise. 
*/
let getAllEvents = () => {
	return new Promise(function(resolve, reject) {
	    let profileObj = db.collection('profile').findOne({ username: "JohnDoe" });
	    	resolve(profileObj);
	});         
}

module.exports = {
	getCurrDay,
	getCurrDate,
	getCurrMonth,
	numberSpelling,
	createProfile,
	createEvent,
	getAllEvents
};




