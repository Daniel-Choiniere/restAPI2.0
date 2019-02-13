const express = require('express');

// setup express app
const app = express();

//a client making a making a GET request --  We want to return some data to the client
app.get('/', function(req, res){
    console.log('Get request');
    res.send({name:'Yoshi'});
})

// set up to listen for requests
app.listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests');
});
