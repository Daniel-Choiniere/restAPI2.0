// this is where we will create all of our routes for our restAPI

// use express routes class
const express = require('express');

// we can mount our route handlers onto this router
const router = express.Router();

// we need to get the Ninja model from our schema file
const Ninja = require('../models/ninja')

// GET route, get a list of ninjas from the database
router.get('/ninjas', function(req, res, next){
    res.send({type: 'GET'});
});

// POST route, add a new ninja to the database
router.post('/ninjas', function(req, res, next){

    // create a new instance of a ninja record 
    // get the data off the body of the request 
    // saves and sends the ninja to the ninjas database
    //  "then" use a JS promise to wait for the ninja to be completley created before the function moves on and sends the ninja to the database 
    Ninja.create(req.body).then(function(ninja){
        // sends a JSON response  back to the user who requested the information so they have a confirmations that data is in the database
        res.send(ninja);
        // if an error is found (i.e. no required name property sent with db data) it will catch it and run the next function
    }).catch(next);
});

// update a ninja in the database
router.put('/ninjas/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res, next){
    res.send({type: 'DELETE'});
});

// we need to export the file to be able to use the code (route handlers) in a seperate file
// the router is what is needed to be passed (exported)
// the file will need to be imported in each necessary subsuquent file
module.exports = router;
