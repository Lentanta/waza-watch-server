const mongoose = require('mongoose');
const { BrandSchema } = require('./brands');
const { CategorySchema } = require('./categories');
const { DiscountSchema } = require('./discounts');

// Product schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number,
  productImage: [],

  brand: {
    type: BrandSchema
  },

  category: {
    type: CategorySchema
  },

  discount: {
    type: DiscountSchema
  },

  active: Boolean
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = { Product, ProductSchema };