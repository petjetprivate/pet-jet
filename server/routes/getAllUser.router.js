const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
  // Send back user object from the session (previously queried from the database)
  pool
  .query (`SELECT * FROM "user";`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "user"')
    res.sendStatus(500)
  })
});

module.exports = router;