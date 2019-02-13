// we need access to the express npm package
const express = require('express');

// setup express app
const app = express();

// intialize 
// to be able to use the routes specified in the api.js file we need to use this line of code
// "require" imports the api.js route handler file
// we will require all calls to have the /api/ in the URL
app.use('/api', require('./routes/api'));

// set up to listen for requests
app.listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests');
});
