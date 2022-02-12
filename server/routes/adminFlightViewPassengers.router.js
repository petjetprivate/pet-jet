const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("inside adminFlightView.router req.user:", req.user);

const queryText = `SELECT * FROM "user" WHERE "flight_event_id"=$1 AND "continent_origin"=$2;`;
const queryValues = [req.user.flight_event_id, req.user.continent_origin]
  pool
    .query(queryText, queryValues)
    // .query (`SELECT "id", "full_name", "phone_num", "email", "avail_start", "avail_end" FROM "user";`)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('ERROR SELECTING ALL FROM "user"', error);
      res.sendStatus(500);
    });
});

module.exports = router;
