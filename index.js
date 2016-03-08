var express = require('express');
var PORT = process.env.PORT || 8080;

var app = express();

var routes = require('./controllers/router.js');
app.use('/', routes);

app.listen(8080, function(){
  console.log('listening on port: '+PORT);
});