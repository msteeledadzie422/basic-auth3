'use strict';

const { Sequelize, DataTypes} = require('sequelize');

const DATABASE_URL = 'sqlite:memory';

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const UsersModel = sequelizeDatabase.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { UsersModel, sequelizeDatabase };