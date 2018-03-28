var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('./services/cors');

var fonts = require('./controllers/fonts');


// Middleware
app.use(bodyParser.json());
app.use(cors);

// Requests
app.get('/api/fonts', fonts.get);
// app.post('/api/fonts', fonts.post);

var server = app.listen(5000, function(){
    console.log('listening on port', server.address().port);
})