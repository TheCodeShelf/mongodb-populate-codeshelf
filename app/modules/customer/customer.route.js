require('dotenv').config();
const express = require('express');
const createCustomer = require('./create.controller');
const getCustomer = require('./get.customer');
const router = express.Router();

router.post('/customer', (req, res) => { return createCustomer(req, res)});
router.get('/customer/:id', (req, res) => { return getCustomer(req, res)});

module.exports = router;