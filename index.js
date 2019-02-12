const express = require('express');

// setup express app
const app = express();

// set up to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Now listening for requests');
});
