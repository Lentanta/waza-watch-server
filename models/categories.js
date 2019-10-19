const mongoose = require('mongoose');

// Category schema
const CategorySchema = new mongoose.Schema({
  name: String
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = { Category, CategorySchema };