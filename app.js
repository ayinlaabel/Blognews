var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://localhost/blog');

//Init App
var app = express();

//BodyParser Middleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Public Folder as Satic Folder
app.use(express.static(path.join(__dirname, 'public')));

//Views Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function (req, res) {
    res.render('index');
});


//Server
app.listen(3000, function () {
    console.log('Connected to Server on Port 3000...');
});