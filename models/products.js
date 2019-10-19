const mongoose = require('mongoose');
const { BrandSchema } = require('./brands');
const { ProductImageSchema } = require('./productImages');
const { CategorySchema } = require('./categories');

// Product schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number,
  productImage: {
    type: [ProductImageSchema]
  },
  brand: {
    type: BrandSchema
  },
  category: {
    type: CategorySchema
  },
  active: Boolean
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = { Product, ProductSchema };