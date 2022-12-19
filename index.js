'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/auth/models/users-model');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection Successful');
  })
  .catch(err => console.error(err));

start();