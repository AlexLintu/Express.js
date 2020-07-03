const express = require('express');
const app = express();

// Data
const users = require('./data.json');


app.get('/api/users', (req, res) => {
  res.send(users);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});