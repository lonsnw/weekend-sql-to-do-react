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
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "tasks" ("task", "completion") VALUES ($1, $2);'
    pool.query(queryText, [req.body.task, req.body.completion]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
    });
});

// PUT

// DELETE

module.exports = router;
