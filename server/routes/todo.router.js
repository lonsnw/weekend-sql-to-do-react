const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "tasks"';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })
});


// POST

// PUT

// DELETE

module.exports = router;
