const express = require('express');
const router = express.Router();

const queries = require('../database/queries');

router.get('/', (request, response, next) => {
    queries.listAuthors()
    .then(author => {
        response.json({author});
    })
    .catch(next);
});

router.get('/:id', (request, response, next) => {
    queries.listAuthors()
    .then(author => {
        response.json({author});
    })
    .catch(next);
});

module.exports = router;