const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
// Using static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');

// Getting all expressions
app.get('/expressions', (req, res, next) => {
  // Sending a response
  res.send(expressions);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});