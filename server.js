var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Models = require('./api/models/musicModel')
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/thoughtmusicdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/musicRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log("ThoughtMusic RESTful API server started on: " + port);