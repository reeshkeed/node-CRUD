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

// PUT: update a product
router.put('/:id', async (req, res) => {
  // Validate request body
  // If validation failed return 200
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Else find id and update
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, price: req.body.price },
    { new: true }
  );

  // Return 404 if product id not found
  if (!product) return res.status(404).send('Product not found.');

  res.send(product);
});

// DELETE: remove a product
router.delete('/:id', async (req, res) => {
  // Find product id and remove
  const product = await Product.findByIdAndRemove(req.params.id);
  // If id not found return 404
  if (!product) return res.status(404).send('Product not found');

  res.send(product);
});

// GET: return single product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('Product not found');

  res.send(product);
});

module.exports = router;
