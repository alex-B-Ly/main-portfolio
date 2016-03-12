var express = require('express');
var router = express.Router();

// ROUTE OBJECTS
var homeObject = require('../models/route_objects/home.js');

// GET DIRECTOR FUNCTION
function getDirect(url_path, hbFile, routeObject){
  router.get(url_path, function(req, res){
    res.render(hbFile, routeObject);
  });
}

// GET ROUTES
  // Home
  getDirect('/', 'home', homeObject);
  // Resume

  // RPS (tentative)

module.exports = router;