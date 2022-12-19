'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { UsersModel } = require('../models/users-model');

async function basicAuth(req, res, next) {

  let basicHeaderParts = req.headers.authorization.split(' ');  
  let encodedString = basicHeaderParts.pop();  
  let decodedString = base64.decode(encodedString); 
  let [username, password] = decodedString.split(':'); 
  
  try {
    const user = await UsersModel.findOne({ where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }
}

module.exports = basicAuth;