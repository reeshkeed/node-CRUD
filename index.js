const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/ipi')
  .then(() => {
    console.log('Connected to mongoDB...');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
