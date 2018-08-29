const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const authors = require('./routes/authors');
const books = require('./routes/books');

app.use(cors());
app.use(bodyParser.json());

app.use('/authors', authors);
app.use('/books', books);


module.exports = app;

