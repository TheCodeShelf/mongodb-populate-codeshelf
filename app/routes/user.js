require('dotenv').config();
const express = require('express');
const createCustomer = require('../controller/user/create');
const deleteCustomer = require('../controller/user/delete');
const router = express.Router();
const login = require('../controller/user/login');


router.post('/user', async (req, res) => { return createCustomer(req, res)});
router.delete('/user', async (req, res) => { return deleteCustomer(req, res)});

router.post('/user/login', async (req, res) => { return login(req, res)});

module.exports = router;