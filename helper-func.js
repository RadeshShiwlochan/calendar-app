let numToWords = require('number-to-words'); 
const { URL, URLSearchParams } = require('url'); 

let getCurrDay = () => {
    let currentDay = new Date();
    let daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday" ];
    return daysOfWeek[currentDay.getDay()];
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
	return monthNames[currentMonth];                  
}

let numberSpelling = (num) => {
    return numToWords.toWords(num);
}

let getIdFromURL = (req) => {
   let url = req.originalUrl;
   // const myURL = new URL(url);
   // return myURL.searchParams.get('id');
   console.log("this is the url ", url);
   return url;
}

module.exports = {
	getCurrDay,
	getCurrDate,
	getCurrMonth,
	numberSpelling,
	getIdFromURL
};