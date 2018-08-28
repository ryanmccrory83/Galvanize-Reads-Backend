const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const queries = require('./queries.js');

app.use(cors());
app.use(bodyParser.json());

app.get('/books', (request, response, next) => {
    queries.listBooks().then(books => {
        response.json({books});
    }).catch(console.error);    
});
app.get('/authors', (request, response, next) => {
    queries.listAuthors().then(authors => {
        response.json({authors});
    }).catch(console.err);
});


app.listen(port, () => {
    console.log(`I'm listening on ${port}`);
});


