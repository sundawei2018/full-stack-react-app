const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

const _filter = {pwd: 0, __v: 0}; 

Router.get('/list', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json(doc);
    });
}); 

Router.post('/update', function(req, res) {
    const userid = req.cookies.userid;
    if(!userid) {
        return json.dumps({code: 1});
    }
    const body = req.body;
    User.findByIdAndUpdate(userid, body, function(err, doc) {
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body);
        return res.json({code:0, data});
    });
});


Router.post('/login', function(req, res) {
    //console.log(req.body);
    const {user, pwd} = req.body;
    User.findOne({user, pwd:md5pwd(pwd)}, _filter, function(err, doc) {
        if (!doc) {
            return res.json({code:1, msg: 'username or password does not exist'});
        }
        res.cookie('userid', doc._id);
        return res.json({code: 0, data: doc});
    });
});

Router.post('/register', function(req, res) {
    const {user, pwd, type} = req.body;
    User.findOne({user: user}, function(err, doc) {
        if (doc) {
            return res.json({code:1, msg:'user already exists'});
        }
        const userModel = new User({user, type, pwd:md5pwd(pwd)});
        userModel.save(function(err, doc) {
            if (err) {
                return res.json({code: 1, msg: 'server error'});
            }
            const {user, type, __id} = doc;
            res.cookie('userid', __id);
            return res.json({code: 0, data: {user, type, __id}});
        });
        


    });
});

Router.get('/info', function(req, res) {
    // check cookie
    const {userid} = req.cookies;
    if (!userid) {
        return res.json({code : 1});
    }
    User.findOne({_id: userid},_filter, function(err, doc) {
        if (err) {
            return res.json({code : 1, msg: 'server error'});
        }
        if (doc) {
            return res.json({code:0, data:doc});
        }
        
    })
});

function md5pwd(pwd) {
    const salt = 'dawei_sun_salt';
    return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;