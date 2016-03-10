var express = require('express');
var router = express.Router();

// ROUTE OBJECTS
var homeObject = require('../models/route_objects/home.js');

// GET ROUTES
router.get('/', function(req, res){
  res.render('home', homeObject);
});

module.exports = router;