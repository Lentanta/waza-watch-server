const mongoose = require('mongoose');
const { ProductSchema } = require('./products');
const Schema = mongoose.Schema;

// BillDetail schema
const BillDetailSchema = new mongoose.Schema({
  product:  { type: Schema.Types.ObjectId, ref: 'Product',require},
  quantity: Number,
  description: String,
  price: Number,
  active: {
    type: Boolean,
    default: true
}
});

const BillDetail = mongoose.model('BillDetail', BillDetailSchema);
module.exports = { BillDetail, BillDetailSchema };