const express = require('express');
const router = express.Router();

const queries = require('../database/queries');

router.get('/', (request, response, next) => {
    queries.listBooks()
    .then(book => {
        response.json({book});
    })
    .catch(next);    
});

router.get('/:id', (request, response, next) => {
    queries.listBooks()
    .then(book => {
        response.json({book});
    })
    .catch(next);    
});

module.exports = router;