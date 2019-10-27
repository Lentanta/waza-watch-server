const mongoose = require('mongoose');
const { BillDetailSchema } = require('./billDetail');
const { UserSchema } = require('./user');

// Bill schema
const BillSchema = new mongoose.Schema({
  deliveryState: String,
  createAt: Date,
  billDetail: {
    type: BillDetailSchema
  },
  user: {
    type: UserSchema
  },
  voucher: {
    type: VoucherSchema
  }
});

const Bill = mongoose.model('Bill', BillSchema);
module.exports = { Bill, BillSchema };