const mongoose = require('mongoose');
const Joi = require('joi');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 200,
  },
});

const Product = mongoose.model('Products', productSchema);

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    price: Joi.number().min(0).max(200).required(),
  });

  return schema.validate(product);
}

module.exports.Product = Product;
module.exports.validate = validateProduct;
