var express = require(express);
var path = require('path');
var bodyparser = require('body-parser');

//Init App
var app = express();

//BodyParser Middleware

//Views Engine
app.use('views', path.join(__dirname,'views'));
app.use('view engine', 'pug');

//Home Route
app.get('/', function (req, res) {
    res.render('index');
});


//Server
app.listen(3000, function () {
    console.log('Connected to Server on Port 3000...');
});