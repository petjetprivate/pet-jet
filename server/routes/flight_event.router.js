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

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const idToGet = req.params.id;
  const sqlText = `SELECT * FROM "flight_event" WHERE "id"=$1;`;
  
  pool
  .query (sqlText, [idToGet])
  .then ((results) => res.send(results.rows[0]))
  .catch ((error) => {
    console.log('ERROR Selection one flight event:')
    res.sendStatus(500)
  })
})

router.put("/:id", rejectUnauthenticated, (req, res) => {
  console.log('EDIT oneFlightevent.router req.body:', req.body);
  
  const query = `
  UPDATE "flight_event"
  SET "name"=$1, "dep_date"=$2, "ret_date"=$3, "USTeamLead"=$4, "EUTeamLead"=$5
  WHERE "id"=$6;`;
  const values = [
    req.body.name,
    req.body.dep_date,
    req.body.ret_date,
    req.body.USTeamLead,
    req.body.EUTeamLead,
    req.params.id,
  ];
  console.log('req.params.id:', req.params.id);
  
  pool
    .query(query, values)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("error:", error);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const flightToDelete = req.params.id;
  const sqlText = `DELETE FROM "flight_event" WHERE "id"=$1;`;
  
  pool
  .query (sqlText, [flightToDelete])
  .then(() => res.sendStatus(202))
  .catch((error) => {
    console.log("DELETE server error:", error);
  });
})

module.exports = router;