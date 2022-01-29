const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('inside flight_event.router');
  

  pool
  .query (`SELECT * FROM "flight_event";`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "flight_event"')
    res.sendStatus(500)
  })
});

// router.get('/:id', (req, res) => {
//   console.log('INSIDE ROUTER.GET:id');

//   const idToGet = req.params.id;
//   const sqlText = `SELECT * FROM "flight_event WHERE "id"=$1;`;
  
//   pool
//   .query (sqlText, [idToGet])
//   .then ((results) => res.send(results.rows[0]))
//   .catch ((error) => {
//     console.log('ERROR Selection one flight event:')
//     res.sendStatus(500)
//   })
// })

module.exports = router;