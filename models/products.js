const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;