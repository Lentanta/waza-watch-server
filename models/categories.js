const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category schema
const CategorySchema = new mongoose.Schema({
  name: String,
  active: {
    type: Boolean,
    default: true
  }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = { Category, CategorySchema };