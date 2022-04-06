const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 200,
  },
});

const Product = mongoose.model('Genre', productSchema);

module.exports.Product = Product;
