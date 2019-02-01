var express = require('express');
var  mongoose = require('mongoose');
var routes = express.Router();

//Bring in Article Model
var Article = require('../models/article');
var WorldNews = require('../models/worldArticle');
var SportNews = require('../models/sportNews');
var Weather = require('../models/weather');

//Article Routers
routes.get('/article', function (req, res) {
    Article.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        }else{
            res.render('article', {
                title: 'Article Title',
                articles:articles
            });
        }
    });
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

//Article News
routes.get('/articleNews', function (req, res) {
    Article.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('articleNews', {
                articles: articles
            });
        }
    });
});

//Sport
routes.get('/add_sportNews', function (req, res) {
    res.render('add_sportNews');
});

//Sport Post
routes.post('/add_sportNews', function (req, res) {
    var sportNews = new SportNews();

    sportNews.title = req.body.title;
    sportNews.author = req.body.author;
    sportNews.summary = req.body.summary;
    sportNews.pgOne = req.body.pgOne;
    sportNews.pgTwo = req.body.pgTwo;
    sportNews.pgThree = req.body.pgThree;
    sportNews.pgFour = req.body.pgFour;

    sportNews.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// Sport Article
routes.get('/sportNews', function (req, res) {
    SportNews.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('sportNews', {
                articles: articles
            });
        }
    });
});

routes.get('/sportNews/:id', function (req, res) {
    SportNews.findById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.render('sportArticle', {
                article:article
            });
        }
    });
});

routes.get('/sportArticle/edit/:id', function (req, res) {
    SportNews.findById(req.params.id, function (err, article) {
        res.render('edit_sportArticle', {
            article: article
        });
    });
});

routes.post('/sportArticle/edit/:id', function (req, res) {
    var sportNews = {};

    sportNews.title = req.body.title;
    sportNews.author = req.body.author;
    sportNews.summary = req.body.summary;
    sportNews.pgOne = req.body.pgOne;
    sportNews.pgTwo = req.body.pgTwo;
    sportNews.pgThree = req.body.pgThree;
    sportNews.pgFour = req.body.pgFour;

    var query = {_id:req.params.id}

    SportNews.update(query, sportNews, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

routes.delete('/sportArticle/:id', function (req, res) {
    var query = {_id:req.params.id};

    SportNews.remove(query, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('success');
    });
});
//Weather
routes.get('/add_weather', function (req, res) {
    res.render('add_weather');
});

routes.post('/add_weather', function (req, res) {
    var weather = new Weather();

    weather.title = req.body.title;
    weather.author = req.body.author;
    // weather.summary = req.body.summary;
    weather.pgOne = req.body.pgOne;
    weather.pgTwo = req.body.pgTwo;
    weather.pgThree = req.body.pgThree;
    weather.pgFour = req.body.pgFour;

    weather.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

//view Weather Article
routes.get('/weatherArticle', function (req, res) {
    Weather.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        }else{
            res.render('articleWeather', {
                articles: articles
            });
        }
    });
});

//Collect Article View
routes.get('/weatherArticle/:id', function (req, res) {
    Weather.findById(req.params.id, function (err, article) {
        res.render('weatherArticle', {
            article: article
        });
    });
});

//Edit
routes.get('/weatherArticle/:id', function (req, res) {
    Weather.findById(req.params.id, function (err, article) {
        res.render('edit_weather', {
            article: article
        });
    });
});
//World
routes.get('/add_worldNews', function (req, res) {
    res.render('add_worldNews');
});

routes.post('/add_worldNews', function (req, res) {
    var worldNews = new WorldNews();

    worldNews.title = req.body.title;
    worldNews.author = req.body.author;
    worldNews.summary = req.body.summary;
    worldNews.pgOne = req.body.pgOne;
    worldNews.pgTwo = req.body.pgTwo;
    worldNews.pgThree = req.body.pgThree;
    worldNews.pgFour = req.body.pgFour;

    worldNews.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

routes.get('/:id', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.render('article',{
                article:article
            });
        }
    });
});

routes.get('/edit/:id', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        res.render('edit_article', {
            article: article
        });
    });
});

routes.post('/edit/:id', function (req, res) {
    var article = {};

    article.title = req.body.title;
    article.author = req.body.author;
    article.summary = req.body.summary;
    article.pgOne = req.body.pgOne;
    article.pgTwo = req.body.pgTwo;
    article.pgThree = req.body.pgThree;
    article.pgFour = req.body.pgFour;

    var query = {_id:req.params.id}

    Article.update(query, article,  function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});

routes.delete('/:id', function (req, res) {
    var query = {_id:req.params.id};

    Article.remove(query, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('success');
    });
});




module.exports = routes;