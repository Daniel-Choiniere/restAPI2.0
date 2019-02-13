// this is where we will create all of our routes for our restAPI

// use express routes class
const express = require('express');

// we can mount our route handlers onto this router
const router = express.Router();

// GET route, get a list of ninjas from the database
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// POST route, add a new ninja to the database
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
});

// update a ninja in the database
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

// we need to export the file to be able to use the code (route handlers) in a seperate file
// the router is what is needed to be passed (exported)
// the file will need to be imported in each necessary subsuquent file
module.exports = router;
