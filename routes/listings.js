'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//GET /listings - get all listings
router.get('/', function (req, res, next) {
    console.log("Getting all listings.");
    return knex('listings')
        .select('*')
        .then(function (data) {
            console.log("Listing data is:", data);
            return data;
            //TODO add details
            //TODO add pics
        })
        .then(function (listings) {
            res.json(listings);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});


//POST /listings - post new listing
router.post('/', function (req, res, next) {
    // note: Undefined fields are ignored by Postgres.
    let listing = {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        price: req.body.price,
        pic: req.body.pic,
        description: req.body.description,
        notes: req.body.notes,
    };
    let listingDetails = req.body.details;
    let listingPics = req.body.pics;
    let listingErrors = [];
    //put listing to db not including details and pics
    return knex('listings')
        .insert(listing)
        .returning('id')
        .then(function (data) {
            let id = parseInt(data);
            console.log("New listing id is: ", id);
            if(data.length === 0) {
                res.send("New listing failed to post.");
            } else {
                if (listingDetails) {
                    //put details to details table for each note /w new id
                    for(var i = 0; i < listingDetails.length; i++) {
                        let detail = {
                            listing_id: id,
                            detail: listingDetails[i]
                        };
                        knex('listing_details')
                            .insert(detail)
                            .returning('id')
                            .then(function (data) { // TODO: MOVE THIS FUNCTION OUTSIDE THE LOOP
                                console.log('New detail data is: ', data);
                                if(data.length === 0) {
                                    console.log('Detail ' + i + ' failed to post.');
                                    listingErrors.push('Detail ' + i + ' failed to post.');
                                } else {
                                    console.log('Detail ' + data + ' posted.');
                                }
                            });
                    }
                }
                if (listingPics) {
                    //put pics to pics table for each pic /w new id
                    for(var j = 0; j < listingPics.length; j++) {
                        let pic = {
                            listing_id: id,
                            url: listingPics[j]
                        };
                        knex('listing_pics')
                            .insert(pic)
                            .returning('id')
                            .then(function (data) { // TODO: MOVE THIS FUNCTION OUTSIDE THE LOOP
                                console.log('New pic data is: ', data);
                                if(data.length === 0) {
                                    console.log('Pic ' + j + ' failed to post.');
                                    listingErrors.push('Pic ' + j + ' failed to post.');
                                } else {
                                    console.log('Pic ' + data + ' posted.');
                                }
                            });
                    }
                }
                data.listingErrors = listingErrors;
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


//GET /listings/:id - get single listing
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    console.log("Getting listing: ", id);
    let listing = {};

    return knex('listings')
        .select('*')
        .where('id', id)
        .then(function (data) {
            listing.data = data;
            //TODO - get pics and details for the listing!
            console.log("Listing data is:", data);
            res.json(data);
        })
        .catch(function (err) {
            console.log("Error is: ", err);
            res.status(500).json({
                err: err
            });
        });
});

//PUT /listings/:id - edit listing
router.put('/:id', function (req, res, next) {
    let id = req.params.id;
    // note: Undefined fields are ignored by Postgres.
    let listing = {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        price: req.body.price,
        pic: req.body.pic,
        description: req.body.description,
        notes: req.body.notes,
    };
    let listingDetails = req.body.details;
    let listingPics = req.body.pics;
    let listingErrors = [];
    //put listing to db not including details and pics
    return knex('listings')
        .where('id', id)
        .update(listing)
        .returning('*')
        .then(function (data) {
            console.log("Updated listing is: ", data);
            if(data.length === 0) {
                res.send("Failed to update listing.");
            } else {
                //put details to details table for each note /w new id
                for(var i = 0; i < listingDetails.length; i++) {
                    let detail = {
                        listing_id: id,
                        detail: listingDetails[i]
                    };
                    knex('listing_details')
                        .where("listing_id", id)
                        .update(detail)
                        .returning('*')
                        .then(function (data) { // TODO: MOVE THIS FUNCTION OUTSIDE THE LOOP
                            console.log('Updated details data is: ', data);
                            if(data.length === 0) {
                                console.log('Details failed to update.');
                                listingErrors.push('Details failed to update.');
                            } else {
                                console.log('Details updated: ', data);
                            }
                        });
                }
                //put pics to pics table for each pic /w new id
                for(var j = 0; j < listingPics.length; j++) {
                    let pic = {
                        listing_id: id,
                        url: listingPics[j]
                    };
                    knex('listing_pics')
                        .where('listing_id', id)
                        .update(pic)
                        .returning('*')
                        .then(function (data) { // TODO: MOVE THIS FUNCTION OUTSIDE THE LOOP
                            console.log('Updated pics data is: ', data);
                            if(data.length === 0) {
                                console.log('Pics failed to update.');
                                listingErrors.push('Pics failed to update.');
                            } else {
                                console.log('Pic ' + data + ' posted.');
                            }
                        });
                }
                data.listingErrors = listingErrors;
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

//DELETE /listings/:id - delete listing
router.delete(':/id', function (req, res, next) {
    let id = req.params.id;
    return knex('listings')
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
