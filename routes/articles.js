var express = require('express');
var  mongoose = require('mongoose');
var routes = express.Router();

//Bring in Article Model
var Article = require('../models/article');
var WordlNews = require('../models/worldArticle');
var LocalNews = require('../models/localArticle');
var ForeginNews = require('../models/foreginArticle');

//Article Routers
routes.get('/article', function (req, res) {
    res.render('article');
});

//Get Add Article
routes.get('/add_article', function (req, res) {
    res.render('add_article');
});

//Post Add Article
routes.post('/add_article', function (req, res) {
    var article = new Article();

    article.title = req.body.title;
    article.author = req.body.author;
    article.summary = req.body.summary;
    article.pgOne = req.body.pgOne;
    article.pgTwo = req.body.pgTwo;
    article.pgThree = req.body.pgThree;
    article.pgFour = req.body.pgFour;
    
    article.save(function (err) {
        if (err) {
            console.log(err);
        }else{
            res.redirect('/');
        }
    });

});

//Article
routes.get('/article/article', function (req, res) {
    Article.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('article', {
                articles:articles
            });
        }
    });
});

//Local
routes.get('/add_localNews', function (req, res) {
    res.render('add_localNews');
});

//Local Post
routes.post('/add_localNews', function (req, res) {
    var localNews = new LocalNews();

    localNews.title = req.body.title;
    localNews.author = req.body.author;
    localNews.summary = req.body.summary;
    localNews.pgOne = req.body.pgOne;
    localNews.pgTwo = req.body.pgTwo;
    localNews.pgThree = req.body.pgThree;
    localNews.pgFour = req.body.pgFour;

    localNews.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/ ');
        }
    });
});
//Foregin
routes.get('/add_foreginNews', function (req, res) {
    res.render('add_foreginNews');
});
//World
routes.get('/add_worldNews', function (req, res) {
    res.render('add_worldNews');
});


module.exports = routes;