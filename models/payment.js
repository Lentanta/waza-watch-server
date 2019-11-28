const mongoose = require('mongoose');
const { BillSchema } = require('./bill');

// Payment schema
const PaymentSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: new Date()
  },
  payedAt: Date,
  totalPay: Number,
  payWith: String,
  isPayed: Boolean,
  payer: Object,
  bill: {
    type: Schema.Types.ObjectId,
    ref:'Bill'
  }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = { Payment, PaymentSchema };