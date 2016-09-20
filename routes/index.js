'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


//Test res.send
router.get('/', function (req, res, next) {
    res.send("Welcome to the Index/Default route!");
});





module.exports = router;
