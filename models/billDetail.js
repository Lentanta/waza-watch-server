const mongoose = require('mongoose');
const { ProductSchema } = require('./products');

// BillDetail schema
const BillDetailSchema = new mongoose.Schema({
  quantity: Number,
  description: String,
  price: Number,
  product: {
    type: ProductSchema
  }
});

const BillDetail = mongoose.model('BillDetail', BillDetailSchema);
module.exports = { BillDetail, BillDetailSchema };