const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

bcrypt.hash('myPassword', 10, function(err, hash) {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log(hash);
    return hash;
  }
});

bcrypt.compare('somePassword', hash, function(err, res) {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log(res);
    return res;
  } 
});

module.exports = router;