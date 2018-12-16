const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/react';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongo connects success');
});

const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required:true},
    age: {type: Number, required: true}
}));

// User.create({
//     user: 'xiaohuang',
//     age:10
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     }
//     else {
//         console.log(err);
//     }
// });



const app = express();

app.get('/', function(req, res) {
    res.send("<h1>Hello</h1>");
});

app.get('/data', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json(doc);
    });
});

app.listen(9093, function() {
    console.log('Node app starts at port 9093');
});