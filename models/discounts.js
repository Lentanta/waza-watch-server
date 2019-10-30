const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Discount schema
const DiscountSchema = new mongoose.Schema({
  discountName: String,
  discountType: String,
  discount: Number,
  endedDate: {
    type: Date,
    default: new Date()
  },
  createAt: {
    type: Date,
    default: new Date()
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Discount = mongoose.model('Discount', DiscountSchema);
module.exports = { Discount, DiscountSchema };