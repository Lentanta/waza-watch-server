const mongoose = require('mongoose');

// Catagory schema
const catagorySchema = new mongoose.Schema({
  name: String
});

const Catagory = mongoose.model('Catagory', catagorySchema);
module.exports = { Catagory, catagorySchema };