const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  phone: Number,
  birthday: Date,
  gender: Boolean,
  role: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = { User, UserSchema };