'use strict';


// require package dependencies
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const logger = require('morgan');

// require file dependencies
const agents = require('./routes/agents');
const auth = require('./routes/auth');
const index = require('./routes/index');
const listings = require('./routes/listings');
const resources = require('./routes/resources');


//fire up the app
const app = express();


// set port const
const port = process.env.PORT || 3000;


// use dependencies
app.use(logger('dev')); //TODO use env for logger
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));


// use cors & configure cors headers
app.use(cors());
app.use(function () {
    app.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
});


//routing
app.use('/', index);
app.use('/auth', auth); // TODO: Restrict path
// app.use(expressJwt({secret: process.env.SECRET})); //, expressJwt({secret: 'CASECRETKEY'})
app.use('/agents', agents);
app.use('/listings', listings);
app.use('/resources', resources);



// error handling
app.use(function (req, res, next) {
    let err = new Error('Route not found.');
    err.status = 404;
    next(err);
});

if(app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({
            err: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});


//listen on appropriate port
app.listen(port, function () {
    console.log('Application is running on port:', port);
});


//export app module
module.exports = app;
