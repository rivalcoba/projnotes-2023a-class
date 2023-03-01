// Importing Express library
var express = require('express');
// Creating a Router Instace
var router = express.Router();

// Creating the route
router.get('/author', (req, res)=>{
  // Responding to the client using res object
  res.json({
    "name": "Ivan",
    "lastname": "Rivalcoba",
    "twitter": "@rivalcoba",
    "job": "ITGAM"
  });
}); // function(req, res){}

// Exporting the router
module.exports = router;