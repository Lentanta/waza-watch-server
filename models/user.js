const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  birthday: Date,
  gender: Boolean,
  role: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = { User, UserSchema };