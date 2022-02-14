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
  .query (`SELECT * FROM "flight_event" ORDER BY "dep_date" ASC;`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "flight_event"')
    res.sendStatus(500)
  })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const idToGet = req.params.id;
  const sqlText = `
  SELECT "id", "name", TO_CHAR("dep_date",'YYYY-MM-DD') AS "dep_date",
  TO_CHAR("ret_date",'YYYY-MM-DD') AS "ret_date", "USTeamLead", "EUTeamLead"
  FROM "flight_event"
  WHERE "flight_event"."id"=$1;
  `;
  
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
  .then(result => {
    //Change the flight_event_id back to null
    query = `UPDATE "user"
    SET "flight_event_id" = null, "sec_level" = 0
    WHERE "flight_event_id" = ${req.params.id};`
    pool.query(query)
    res.sendStatus(202)
    
  }).catch((error) => {
    console.log("DELETE server error:", error);
  });
})

router.post('/', rejectUnauthenticated, (req, res) => {
  const { group, name, leads } = req.body;
  let USLead = ''
  let EULead = ''
  // console.log(req.body)
  for (let lead of leads){
    if (lead.continent_origin === 'US'){
      USLead = lead
    }else {
      EULead = lead
    }
  }

  const postText = `
  INSERT INTO "flight_event" ("name", "USTeamLead", "EUTeamLead")
  VALUES ($1, $2, $3)
  RETURNING id
  `;
  // console.log('body',req.body)
  const postValues = [name, USLead.id, EULead.id];

  pool.query(postText, postValues)
  .then(result => {
    //Now that both are done, send back success!
    query = `UPDATE "user"
    SET "sec_level" = 1
    WHERE "id" = ${USLead.id} OR "id" = ${EULead.id};`
    pool.query(query)
    res.send(result.rows[0]);
}).catch(err => {
    console.log('THIS IS A CREATE FLIGHT EVENT ISSUE', err);
    res.sendStatus(500)
})
})



router.put("/", rejectUnauthenticated, (req, res) => {  
  // console.log('UPDATE USER FLIGHT EVENT REQ.BODY:',req.body)
  let payload = req.body.actionPlusPostResponse.action.payload
  let id = req.body.actionPlusPostResponse.postResponse.id
  // console.log('THIS IS WHAT PAYLOAD IS', payload)
  let userIDs = []
  for (let person of payload.group){
    userIDs.push(person.id)
  }
  // console.log(userIDs)

  let p = "";
  p += userIDs.join(` OR "id" = `)
  console.log(p)

  const query = `
  UPDATE "user"
  SET "flight_event_id"=$1
  WHERE "id" = ${p};`;
  const values = [
    id
  ];

  pool
    .query(query, values)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("error:", error);
    });
});

module.exports = router;