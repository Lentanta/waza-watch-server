const mongoose = require('mongoose');

// Discount schema
const DiscountSchema = new mongoose.Schema({
  discountName: String,
  discountType: Number,
  discount: Number,
  endedDate: Date,
  createAt: Date
});

const Discount = mongoose.model('Discount', DiscountSchema);
module.exports = { Discount, DiscountSchema };