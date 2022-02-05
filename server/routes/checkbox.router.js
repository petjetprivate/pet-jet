const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.put("/:id", rejectUnauthenticated, (req, res) => {
  console.log("EDIT checkbox.router req.body:", req.body);
  console.log("req.body:", req.body);

  if (req.body.signed_contract === false) {
    const query = `
  UPDATE "user"
  SET "signed_contract"=$1
  WHERE "id"=$2;`;
    const values = [true, req.user.id]
    pool
    .query(query, values)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("error:", error);
    });
  } else {
    const query = `
  UPDATE "user"
  SET "signed_contract"=$1
  WHERE "id"=$2;`;
    const values = [false, req.user.id]
    pool
    .query(query, values)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("error:", error);
    });
  }

  // pool
  //   .query(query, values)
  //   .then(() => res.sendStatus(202))
  //   .catch((error) => {
  //     console.log("error:", error);
  //   });
});

module.exports = router;
