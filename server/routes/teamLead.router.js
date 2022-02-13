const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log(
    "teamLead.router req.user.continent_origin:",
    req.user.continent_origin
  );
  const values = [req.user.flight_event_id];
  let sqlText;

  if (req.user.continent_origin === "US") {
    sqlText = `
  SELECT * FROM "flight_event"
  JOIN "user"
  ON "user"."id"="flight_event"."USTeamLead"
  WHERE "flight_event"."id"=$1;
  `;
  } else if (req.user.continent_origin === "EU") {
    sqlText = `
      SELECT * FROM "flight_event"
      JOIN "user"
      ON "user"."id"="flight_event"."EUTeamLead"
      WHERE "flight_event"."id"=$1;
      `;
  }
  // const sqlText = `
  // SELECT * FROM "user"
  // JOIN "flight_event"
  // ON "flight_event"."id"="user"."flight_event_id"
  // WHERE "flight_event_id"=$1
  // AND "continent_origin"=$2
  // AND ";
  // `;

  pool
    .query(sqlText, values)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("ERROR team lead:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
