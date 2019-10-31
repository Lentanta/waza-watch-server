const mongoose = require('mongoose');
const { BillDetailSchema } = require('./billDetail')
const Schema = mongoose.Schema;

// Bill schema
const BillSchema = new mongoose.Schema({
  billDetail: [{ type: Schema.Types.ObjectId, ref: 'BillDetail' }],
  deliveryState: {
    type:String,
    default: 'ORDER'
  },
  address: String,
  isUser: {
    type:Boolean,
    default:false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  nonUser: {
    type: Object,
    default:null
  },
  createAt: {
    type: Date,
    default: new Date()
  },
  active: {
    type: Boolean,
    default: true
}
});

const Bill = mongoose.model('Bill', BillSchema);
module.exports = { Bill, BillSchema };