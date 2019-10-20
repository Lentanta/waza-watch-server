const mongoose = require('mongoose');
const { ProductSchema } = require('./products');

// BillDetail schema
const BillDetailSchema = new mongoose.Schema({
  product: {
    type: ProductSchema
  },
  quantity: Number,
  description: String,
  price: Number
});

const BillDetail = mongoose.model('BillDetail', BillDetailSchema);
module.exports = { BillDetail, BillDetailSchema };