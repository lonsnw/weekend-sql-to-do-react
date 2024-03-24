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
    let queryText = 'INSERT INTO "tasks" ("task", "completion") VALUES ($1, $2);';
    pool.query(queryText, [req.body.task, req.body.completion]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
    });
});

// PUT
router.put('/:id', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params);
    let queryText = `UPDATE "tasks" SET "completion" = true WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error('Error in PUT /tasks/:id', error);
        res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    console.log('req.params', req.params);
    let queryText = 'DELETE FROM "tasks" WHERE "id" = $1;';
    console.log(queryText);
    pool.query(queryText, [req.params.id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error('Error in DELETE /tasks/:id', error);
        res.sendStatus(500);
    });
});


module.exports = router;
