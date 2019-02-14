// we need access to the express npm package
const express = require('express');

// we need access to the body-parser npm package
// body-parser looks ahead and reads the body and passes the data along with the request
const bodyParser = require('body-parser')

// setup express app
const app = express();

// parses the body
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
