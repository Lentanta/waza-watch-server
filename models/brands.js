const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Brand schema
const BrandSchema = new mongoose.Schema({
  name: String,
  active: {
    type: Boolean,
    default: true
}
});

const Brand = mongoose.model('Brand', BrandSchema);
module.exports = { Brand, BrandSchema };