'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
// const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

//Test res.send on get routes.
// router.get('/', function (req, res, next) {
//     res.send("Welcome to the Auth route!");
// });
//
// router.get('/signup', function (req, res, next) {
//     res.send("Welcome to the Signup route!");
// });
//
// router.get('/login', function(req, res, next) {
//     res.send("Welcome to the Login route!");
// });

// Post routes
router.post('/signup', function (req, res, next) {
    // res.send("Welcome to the Signup route!");
    let agent = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        displayname: req.body.displayname,
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        pic: req.body.pic,
        bio: req.body.bio
    };
    let info = {
        agent: req.body.username,
        passwordError: false,
        error: {}
    };


    //validate password
    checkPassword(req, info);


    //check if username exists in db...
    existingUser(agent.username)
        .then(function (result) {
            if(info.passwordError) {
                console.log(info.error.password);
                res.status(401).json(info.error.password);
                return;
            } else if(result.length >= 1) {
                console.log('Agent already exists.');
                res.status(401).json({
                    message: 'Please try a differnt username.'
                });
                return;
            } else {
                //create the new user
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(agent.password, salt, function (err, hash) {
                        agent.password = hash;
                        knex('agents')
                            .insert(agent)
                            .returning('id')
                            .then(function (id) {
                                let profile = {
                                    id: id[0],
                                    username: agent.username
                                };
                                let token = jwt.sign(profile, process.env.SECRET);
                                res.status(200).json({
                                    token: token,
                                    id:profile.id
                                });
                            })
                            .catch(function (err) {
                                res.status(500).json({
                                    err: err
                                });
                            });
                    });
                });
            }
        });
});

router.post('/login', function (req, res, next) {
    // console.log("You've posted to the Login route. The request was: ", req.body);
    console.log("Processing Login");
    let agent = {
        username: req.body.username,
        password: req.body.password
    };
    //check for existing user
    existingUser(agent.username)
        .then(function (result) {
            console.log("result is:", result);
            console.log("Logging in: ", result[0].displayname);
            if(result.length === 0) {
                console.log("Existing Agent Not Found.");
                //if agent doesn't exist
                res.status(401).json({
                    message: 'Username does not exist.'
                });
                return;
            } else {
                console.log("Agent Exists, Checking Password.");
                agent.id = result[0].id;
                bcrypt.compare(agent.password, result[0].password, function (err, result) {
                        console.log("Bcyrpt Result is: ", result);
                        if(result === false) {
                            console.log("Incorrect Password Encountered.");
                            res.status(401).send({
                                message: 'Please try your password again.'
                            });
                            return;
                        } else {
                            console.log("Agent Authenticated.");
                            let profile = {
                                id: agent.id,
                                username: agent.username
                            };
                            console.log(profile);
                            let token = jwt.sign(profile, process.env.SECRET);
                            res.status(200).json({
                                token: token,
                                id: profile.id
                            });
                        }
                    });
                    //TODO This catch isn't working::log is:: Unhandled rejection TypeError: Cannot read property 'catch' of undefined at /Users/gabethexton/Documents/Species Design/clarkeagency/rev1site/server/routes/auth.js:132:21
                    // .catch(function (err) {
                    //     console.log("Login Error Encountered.");
                    //     console.log(err);
                    // });
            }
        });
});


//check for existing user
function existingUser(username) {
    console.log("Checking for Existing Agent.");
    return knex.select('*').from('agents').where({
        username: username
    });
}

//password validations
function checkPassword(req, info) {
    console.log('Performing Password Valitation');
    info.password = req.body.password;
    info.error.password = [];
    if(req.body.password.length <= 7) {
        info.passwordError = true;
        info.error.password.push({
            message: "Password should be 8 or more characters."
        });
    }
    const numRegex = /\d/g;
    if(!req.body.password.match(numRegex)) {
        info.passwordError = true;
        info.error.password.push({
            message: "Password must contain at least one number."
        });
    }
    const specRegex = /\W/g;
    if(!req.body.password.match(specRegex)) {
        info.passwordError = true;
        info.error.password.push({
            message: "Password must contain at least one special character."
        });
    }
}





module.exports = router;
