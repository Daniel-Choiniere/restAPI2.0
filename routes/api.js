// this is where we will create all of our routes for our restAPI

// use express routes class
const express = require('express');

// we can mount our route handlers onto this router
const router = express.Router();

// we need to get the Ninja model from our schema file
const Ninja = require('../models/ninja')

            // GET ROUTES
// GET route, get a list of all the ninjas from the database
router.get('/ninjas/', function(req, res, next){
    // if we want to find and return a list of all of the ninjas
    // find the ninjas then once they are found perform this callabck function
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });
}); 

// GET route, if we want to find a specific ninja in the database
router.get('/ninjas/:id', function(req, res, next){
    Ninja.findById({_id: req.params.id}, req.body).then(function(ninja){
            res.send(ninja);
    });
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

// update existing data (a ninja) in the database
router.put('/ninjas/:id', function(req, res, next){
    // find the ninja by the id that the user passes in
    // update ninja in database with user provided data found in req.body object parameters
    // a promise is returned (with the ninja parameter) that only when the requested id user is found and updated, can the function fire
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        // refind the new ninja just updated and send that 
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
        });
    });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res, next){
    // using this mongoose method it will find the specified id (i.e. req.params.id) and return a promise (.then) that will return to us the removed ID (which we can use as a parameter) and fire a function only once the id is found and removed. 
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        // send back to the user the ID (i.e. ninja) that has been removed
        res.send("HEllo there" + ninja);
    });
});

// we need to export the file to be able to use the code (route handlers) in a seperate file
// the router is what is needed to be passed (exported)
// the file will need to be imported in each necessary subsuquent file
module.exports = router;
