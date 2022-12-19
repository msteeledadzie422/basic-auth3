'use strict';

const express = require('express');
require('dotenv').config();
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const router = require('./auth/router');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };