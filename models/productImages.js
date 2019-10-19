const mongoose = require('mongoose');

// ProductImage schema
const ProductImageSchema = new mongoose.Schema({
  url: String
});

const ProductImage = mongoose.model('ProductImage', ProductImageSchema);
module.exports = { ProductImage, ProductImageSchema };