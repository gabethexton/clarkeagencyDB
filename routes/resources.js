 'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//GET /resources - get all resources
router.get('/', function (req, res, next) {
    console.log("Getting all resources.");
    return knex('resources')
        .select('*')
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});


//POST /resources - post new resource
router.post('/', function (req, res, next) {
    // note: Undefined fields are ignored by Postgres.
    let resource = {
        category: req.body.category,
        subcategory: req.body.subcategory,
        title: req.body.title,
        agent_id: req.body.agent_id,
        text: req.body.text
    };

    return knex('resources')
        .insert(resource)
        .returning('id')
        .then(function (data) {
            let id = parseInt(data);
            console.log("New resource id is: ", id);
            if(data.length === 0) {
                res.send("New resource failed to post.");
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


//GET /resources/:id - get single resource
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    console.log("Getting resource: ", id);
    let resource = {};
    return knex('resources')
        .select('*')
        .where('id', id)
        .then(function (data) {
            resource = data;
            console.log("Resource data is:", data);
            res.json(data);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});


//PUT /resources/:id - edit resource
router.put('/:id', function (req, res, next) {
    let id = req.params.id;
    // note: Undefined fields are ignored by Postgres.
    let resource = {
        category: req.body.category,
        subcategory: req.body.subcategory,
        title: req.body.title,
        agent_id: req.body.agent_id,
        text: req.body.text
    };

    return knex('resources')
        .where("id", id)
        .update(resource)
        .returning('*')
        .then(function (data) {
            console.log("Updated Resource is: ", data);
            if(data.length === 0) {
                res.send("Resource edit failed to post.");
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


//DELETE /resources/:id - delete resource
router.delete(':/id', function (req, res, next) {
    let id = req.params.id;
    return knex('resources')
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



module.exports = router;
