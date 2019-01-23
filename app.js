var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://localhost/blog');

var db = mongoose.connection;

//Check db connection
db.on('open', function () {
    console.log('Connected to Mongodb on port 27017...');
});

//Check db error
db.once('once', function (err) {
    console.log(err);
});


//Init App
var app = express();

//Bring in Models
var Article = require('./models/article');

//BodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Public Folder as Satic Folder
app.use(express.static(path.join(__dirname, 'public')));

//Views Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function (req, res) {
    // Article.find({}, function (err, articles) {
    //     if (err) {
    //         console.log(err);
    //     }else{
    //         res.render('index',{
    //             // articles:articles
    //         });
    //     }
    // });
    res.render('index')
});

//Roues
var Article = require('./routes/articles');
app.use('/article', Article);


//Server
app.listen(3000, function () {
    console.log('Connected to Server on Port 3000...');
});