const mongoose = require('mongoose');

// Voucher schema
const VoucherSchema = new mongoose.Schema({
  voucherDiscount: Number,
  voucherDescription: String
});

const Voucher = mongoose.model('Voucher', VoucherSchema);
module.exports = { Voucher, VoucherSchema };