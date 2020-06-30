const express = require('express');
const app = express();
const expressionsRouter = require('./expressions');
const animalsRouter = require('./animals');
const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');


const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));
app.use('/expressions', expressionsRouter);
app.use('/animals', animalsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
