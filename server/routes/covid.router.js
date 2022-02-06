const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

  router.put("/:id", rejectUnauthenticated, (req, res) => {
    console.log("EDIT covid.router req.body.covid_free:", req.body.covid_free);
    console.log("req.params.id:", req.params.id);
  
    if (req.body.covid_free === false) {
      const query = `
    UPDATE "user"
    SET "covid_free"=$1
    WHERE "id"=$2;`;
      const values = [true, req.params.id]
      pool
      .query(query, values)
      .then(() => res.sendStatus(202))
      .catch((error) => {
        console.log("error:", error);
      });
    } else {
      const query = `
    UPDATE "user"
    SET "covid_free"=$1
    WHERE "id"=$2;`;
      const values = [false, req.params.id]
      pool
      .query(query, values)
      .then(() => res.sendStatus(202))
      .catch((error) => {
        console.log("error:", error);
      });
    }
  });

module.exports = router;