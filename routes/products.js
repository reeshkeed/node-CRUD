const express = require('express');
const router = express.Router();

const { Product, validate } = require('../models/product');

// GET: return all product
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// POST: add a product
router.post('/', async (req, res) => {
  // Validate request body
  // If validation failed return 200
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Else save it to DB
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product = await product.save();

  res.send(product);
});

module.exports = router;
