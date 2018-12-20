const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user');

const app = express();
app.use(cookieParser());
app.use(bodyParser());

app.use('/user', userRouter);

app.listen(9093, function() {
    console.log('Node app starts at port 9093');
});

// const mongoose = require('mongoose');
// const DB_URL = 'mongodb://localhost:27017/react';
// mongoose.connect(DB_URL);


// mongoose.connection.on('connected', function() {
//     console.log('mongo connects success');
// });
