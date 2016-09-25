'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');



//Test res.send
router.get('/', function (req, res, next) {
    return knex('agents')
        .select('*')
        .then(function (data) {
            console.log("Select data is:", data);
            res.json(data);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});


//Get agents/:id - show profile
router.get('/:id', function (req, res, next) {
    console.log("GET Req params are: ", req.params);
    let id = req.params.id;
    console.log("Loading Agent Profile: ", id);
    return knex('agents')
        .select('*')
        .where('id', id)
        .then(function (data) {
            console.log("Select data is:", data);
            res.json(data);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});

//LOOKING FOR POST NEW AGENT? - IT"S ON THE AUTH ROUTE!

//Put agents/:id - update profile
router.put('/:id', function (req, res, next) {
    console.log("PUT Req params are: ", req.params);
    let id = req.params.id;
    // note: Undefined fields are ignored by Postgres.
    let updatedAgent = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        displayname: req.body.displayname,
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        bio: req.body.bio
    };
    console.log("Updated Agent info is:", updatedAgent);
    // put updated agent to db
    return knex('agents')
        .where('id', id)
        .update(updatedAgent, '*')
        .then(function (data) {
            console.log("PUT Result data is: ", data);
            if(data.length === 0) {
                res.send("No agent to update.");
            } else {
                res.json(data);
            }
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});


//Delete /agents:id - delete profile
router.delete('/:id', function (req, res, next) {
    let id = req.params.id;
    return knex('agents')
        .where('id', id)
        .del()
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });
});


//Reset /agents/resetpassword - reset password
router.post('/resetpassword', function (req, res) {
    console.log("Resetting Password.");
    let id = req.user.id;
    bcrypt.hash(req.body.newPassword, 10, function (err, result) {
        if(result) {
            knex('agents')
                .update("password", result)
                .where("id", id)
                .then(function () {
                    console.log("Password reset.");
                    res.json({
                        message: 'Your password has been successfully reset.'
                    });
                })
                .catch(function (err) {
                    console.log("Password reset error: ", err);
                    res.json({
                        message: 'There was an error resetting your password.',
                        err: err
                    });
                });
        }
        if(err) {
            console.log("Password reset error: ", err);
            res.json({
                message: 'There was an error resetting your password.',
                err: err
            });
        }
    });
});


module.exports = router;
