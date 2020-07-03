const express = require('express');
const app = express();

app.get('/api/users', (req, res, next) => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'B' },
    { id: 3, firstName: 'Justin', lastName: 'C' }
  ];

  res.json(customers);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});