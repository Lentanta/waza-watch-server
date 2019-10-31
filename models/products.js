const mongoose = require('mongoose');
const { BrandSchema } = require('./brands');
const { CategorySchema } = require('./categories');
const { DiscountSchema } = require('./discounts');
const Schema = mongoose.Schema;

// Product schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number,
  productImage: String,
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  discount: { type: Schema.Types.ObjectId, ref: 'Discount' },
  active: {
    type: Boolean,
    default: true
  }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = { Product, ProductSchema };