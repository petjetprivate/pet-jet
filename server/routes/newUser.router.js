const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware')




router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('/newUser POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user',req.body.password);
  const sqlText = `
  UPDATE "user"
  set "full_name" = $1,
  "phone_num" = $2,
  "email" = $3,
  "avail_start" = $4,
  "avail_end" = $5, 
  "continent_origin" = $6
  WHERE "id" = $7
  `;
  console.log('body',req.body)
  const sqlValues = [
    
    req.body.full_name,
    req.body.phone_num,
    req.body.email,
    req.body.avail_start,
    req.body.avail_end,
    req.body.continent_origin,
    req.params.id
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    });
});


router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('/pet POST route');
  console.log(req.body);
  console.log('user', req.user);
  const sqlText = `
    INSERT INTO "pet"
      ("name", "breed", "weight", "owner_id")
      VALUES
      ($1, $2, $3, $4);
  `;
  console.log('body',req.body)
  const sqlValues = [
    req.body.name,
    req.body.breed,
    req.body.weight,
    req.user.id,
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200)
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    });
});





module.exports = router;