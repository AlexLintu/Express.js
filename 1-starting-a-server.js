// Importing the express library here
const express = require('express');
// Instantiating the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoking the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});