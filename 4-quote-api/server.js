const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Get a random quote
app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({
    quote: randomQuote
  });
});

// Get all quotes
app.get('/api/quotes', (req, res, next) => {
  if (req.query.person !== undefined) {
    const quotesByPerson = quotes.filter(quote => quote.person === req.query.person);
    res.send({
      quotes: quotesByPerson
    });
  } else {
    res.send({
      quotes: quotes
    });
  }
});

// Add new quotes
app.post('/api/quotes', (req, res, next) => {
  if (req.query.quote === undefined || req.query.person === undefined) {
    res.status(400).send();
  } else {
    const newQuote = {
      quote: req.query.quote,
      person: req.query.person
    }
    quotes.push(newQuote);

    res.send({
      quote: newQuote
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});