var express = require('express');
var handle = require('express-handlebars');
var PORT = process.env.PORT || 8080;

var app = express();

// MIDDLEWARE - HANDLEBARS
app.engine('handlebars', handle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLEWARE - STATIC
app.use('/static', express.static('public'));

// ROUTES
var routes = require('./controllers/router.js');
app.use('/', routes);

app.listen(8080, function(){
  console.log('listening on port: '+PORT);
});