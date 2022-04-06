const mongoose = require('mongoose');
const express = require('express');
const app = express();

const products = require('./routes/products');

mongoose
  .connect('mongodb://localhost/ipi')
  .then(() => {
    console.log('Connected to mongoDB...');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

app.use(express.json());
app.use('/api/products', products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
