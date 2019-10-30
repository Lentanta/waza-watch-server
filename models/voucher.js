const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Discount schema
const VoucherSchema = new mongoose.Schema({
    name: String,
    voucherDiscount: Number,
    voucherDescription: String,
    voucherCode: String,
    active: {
        type: Boolean,
        default: true,
    }
});

const Voucher = mongoose.model('Voucher', VoucherSchema);
module.exports = { Voucher, VoucherSchema };