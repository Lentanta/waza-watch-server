const mongoose = require('mongoose');
const { BillDetailSchema } = require('./billDetail')

// Bill schema
const BillSchema = new mongoose.Schema({
  billDetail: {
    type: BillDetailSchema
  },
  deliveryState: String,
  createAt: Date,
});

const Bill = mongoose.model('Bill', BillSchema);
module.exports = { Bill, BillSchema };