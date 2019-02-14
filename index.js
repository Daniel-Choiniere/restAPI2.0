// we need access to the express npm package
const express = require('express');

// we need access to the body-parser npm package
// body-parser looks ahead and reads the body and passes the data along with the request
const bodyParser = require('body-parser')

//we need to access the mongoose npm package 
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to the mongodb database using mongoose
// if database directory does not already exist, mongoose will go out and create the database for us
mongoose.connect('mongodb://localhost/ninjago');
// overrides the deprecated mongoose promoise
mongoose.Promise = global.Promise;

// parses the body using body-parser package
app.use(bodyParser.json())


// intialize routes
// to be able to use the routes specified in the api.js file we need to use this line of code
// "require" imports the api.js route handler file
// we will require all calls to have the /api/ in the URL
app.use('/api', require('./routes/api'));

// set up to listen for requests
app.listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests');
});
