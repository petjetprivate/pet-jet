const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("inside adminFlightView.router");

  pool
    .query(`SELECT * FROM "user";`)
    // .query (`SELECT "id", "full_name", "phone_num", "email", "avail_start", "avail_end" FROM "user";`)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('ERROR SELECTING ALL FROM "flight_event"');
      res.sendStatus(500);
    });
});

module.exports = router;
