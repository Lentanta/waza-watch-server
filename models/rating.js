const mongoose = require('mongoose');
const { UserSchema } = require('./user');
const { ProductSchema } = require('./products');
const Schema = mongoose.Schema;

// Rating schema
const RatingSchema = new mongoose.Schema({
    score: Number,
    content: String,
    createdAt: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' }
});

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = { Rating, RatingSchema };