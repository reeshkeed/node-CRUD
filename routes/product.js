const express = require('express');
const router = express.Router();

const { Product } = require('../models/products');

// GET: return all product
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

module.exports = router;
