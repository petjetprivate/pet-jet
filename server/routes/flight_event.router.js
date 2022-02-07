const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside flight_event.router');
  

  pool
  .query (`SELECT * FROM "flight_event";`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "flight_event"')
    res.sendStatus(500)
  })
});

module.exports = router;