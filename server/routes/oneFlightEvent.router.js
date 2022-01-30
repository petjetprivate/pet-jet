const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
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

router.put("/:id", (req, res) => {
  console.log('EDIT oneFlightevent.router req.body:', req.body);
  
  const query = `UPDATE "flight_event"
  SET "name"=$1, "date"=$2, "USTeamLead"=$3, "EUTeamLead"=$4
  WHERE "id"=$5;`;
  const values = [
    req.body.name,
    req.body.date,
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

module.exports = router;