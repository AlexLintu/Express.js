const express = require('express');
const app = express();

app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else { // Status code:
    res.status(404).send("Expression doesn't exist");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});