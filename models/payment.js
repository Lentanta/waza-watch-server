const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Payment schema
const PaymentSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: new Date()
  },
  payAt:Date,
  payId: String,
  payer: Object,
  amount: Number,
  status: String,
  bill: {
    type: Schema.Types.ObjectId,
    ref:'Bill'
  }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = { Payment, PaymentSchema };