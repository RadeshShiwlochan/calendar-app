const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const monthRoutes = require('./routes/month-routes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.set('view engine', 'ejs');
app.use('/', monthRoutes);


app.listen(3000, () => {
	console.log("Listening on port:3000");
});