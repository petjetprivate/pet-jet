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

module.exports = router;