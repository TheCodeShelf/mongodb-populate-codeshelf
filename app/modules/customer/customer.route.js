require('dotenv').config();
const express = require('express');
const createCustomer = require('./create.controller');
const router = express.Router();

router.post('/customer', (req, res) => { return createCustomer(req, res)});

module.exports = router;