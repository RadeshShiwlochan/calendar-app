const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

const monthRoutes      = require( './routes/month-routes' );
const dayRoutes        = require( './routes/day-routes' );
const schedEventRoutes = require( './routes/schedEvent-routes' );
const loginRoutes      = require( './routes/login-routes');

app.use(express.static( 'public' ));
app.use(bodyParser.urlencoded( {extended: true } ));
app.set( 'view engine', 'ejs' );
app.use( '/', loginRoutes );
app.get( '/month', monthRoutes );
app.get( '/day', dayRoutes );
app.post( '/scheduleEvent', dayRoutes );
app.get( '/schedEvents', schedEventRoutes );
app.post( '/calendarView', loginRoutes );

app.listen(3000, () => {
	console.log( "Listening on port:3000" );
});