const mongoose = require('mongoose');

// Brand schema
const brandSchema = new mongoose.Schema({
  name: String
});

const Brand = mongoose.model('Brand', brandSchema);
module.exports = { Brand, brandSchema };