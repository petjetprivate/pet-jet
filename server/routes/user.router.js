const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const continent_origin = req.body.continent_origin
  const full_name = req.body.full_name
  const sec_level = Number(req.body.sec_level)

  const queryText = `INSERT INTO "user" (username, password, continent_origin, full_name, sec_level)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [username, password, continent_origin, full_name, sec_level])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// experiencing syntax error at or near ":" 
// can't figure it out as of yet - needs review?
router.put("/:id", (req, res) => {
  let query = `update "user"
					set "full_name"= $1,
          "email"= $2,
          "phone_num"= $3,
          "avail_start"= $4,
          "avail_end"= $5,
          "continent_origin"= $6
          where "id" = $7;`
          
          const values = [
            req.body.full_name,
            req.body.email,
            req.body.phone,
            req.body.avail_start,
            req.body.avail_end,
            req.body.continent_origin,
            req.params.id
          ]
  pool.query(query, values)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('user PUT route error /:id', error);
      res.sendStatus(500);
    })
});



module.exports = router;
