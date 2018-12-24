const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json(doc);
    });
}); 

Router.post('/login', function(req, res) {
    //console.log(req.body);
    const {user, pwd} = req.body;
    User.findOne({user, pwd:md5pwd(pwd)}, {pwd: 0}, function(err, doc) {
        if (!doc) {
            return res.json({code:1, msg: 'username or password does not exist'});
        }
        return res.json({code: 0, data: doc});
    });
});

Router.post('/register', function(req, res) {
    console.log(req.body);
    const {user, pwd, type} = req.body;
    User.findOne({user: user}, function(err, doc) {
        if (doc) {
            return res.json({code:1, msg:'user already exists'});
        }
        User.create({user, pwd: md5pwd(pwd), type}, function(err, doc) {
            if (err) {
                return res.json({code:1, msg: 'something wrong'});
            }
            return res.json({code: 0});
        });
    });
});

Router.get('/info', function(req, res) {
    // check cookie
    return res.json({code : 1});
});

function md5pwd(pwd) {
    const salt = 'dawei_sun_salt';
    return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;