const mongoose = require('mongoose');

// ProductImage schema
const productImageSchema = new mongoose.Schema({
  url: String
});

const ProductImage = mongoose.model('ProductImage', productImageSchema);
module.exports = { ProductImage, productImageSchema };