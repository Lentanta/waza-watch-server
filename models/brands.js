const mongoose = require('mongoose');

// Brand schema
const BrandSchema = new mongoose.Schema({
  name: String
});

const Brand = mongoose.model('Brand', BrandSchema);
module.exports = { Brand, BrandSchema };