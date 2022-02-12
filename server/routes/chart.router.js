const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');


const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('chart.router log');
    pool
        .query(`SELECT "avail_start", "continent_origin" FROM "user"`)
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('ERROR SELECTING ALL FROM "flight_event"')
            res.sendStatus(500)
        })
});

module.exports = router;