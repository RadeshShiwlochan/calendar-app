const Mongoose = require('mongoose').connect("mongodb://radcalendaruser:Buickregal1@ds033096.mlab.com:33096/radcalendar");

Mongoose.connection.on('error', error => {
	console.log("Error occurred while trying to connect to mlab");
});

module.exports = {
	Mongoose
}