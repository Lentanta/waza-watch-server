const mongoose = require('mongoose');
const { BillSchema } = require('./bill');

// Payment schema
const PaymentSchema = new mongoose.Schema({
  createdAt: Date,
  payedAt: Date,
  totalPay: Number,
  payWith: String,
  isPayed: Boolean,
  payer: String,
  bill: {
    type: BillSchema
  }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = { Payment, PaymentSchema };