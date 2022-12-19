'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UsersModel } = require('./models/users-model');
const basicAuth = require('./middleware/basicauth');

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UsersModel.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating this User'); }
});

router.post('/signin', basicAuth, (req, res) => {
  res.status(200).send('Sign in successful');
});

module.exports = router;