const mongoose = require('mongoose');
const brandSchema = require('./brands');
const productImageSchema = require('./productImages');
const categorySchema = require('./categories');

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number,
  productImage: {
    type: [productImageSchema]
  },
  brand: {
    type: [brandSchema]
  },
  category: {
    type: [categorySchema] 
  },
  active: Boolean
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;