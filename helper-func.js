let numToWords   = require('number-to-words'); 
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


let createEvent = ( req, cDate ) => {
	//Reference used: https://stackoverflow.com/questions/27513504/push-to-mongodb-array-using-dynamic-key
	let username = "radesh0430";
	let startTime   = req.body.startTime;
	let endTime     = req.body.endTime;
	let descriptOfEvent = req.body.description;
	let newEvent = {};
	newEvent["October.days." + cDate] = {start : startTime, end: endTime, description : descriptOfEvent };
	db.collection('profile').update( { username : username }, { $push :  newEvent });
}

/*
 Querying for profile object results in a promise returned. This functions resolves 
 the promise. 
*/
let getAllEvents = () => {
	return new Promise(function(resolve, reject) {
	    let profileObj = db.collection('profile').findOne({ username: "radesh0430" });
	    	resolve(profileObj);
	});         
}

module.exports = {
	getCurrDay,
	getCurrDate,
	getCurrMonth,
	numberSpelling,
	createEvent,
	getAllEvents
};




