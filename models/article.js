var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pgOne:{
        type: String,
        required: true
    },
    pgTwo:{
        type: String,
        required: true
    },
    pgThree:{
        type: String,
        required: true
    },
    pgFour:{
        type: String,
        required: true
    }
});

var Article = module.exports = mongoose.model('Article', articleSchema);