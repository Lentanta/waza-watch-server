const mongoose = require('mongoose');

// Rating schema
const RatingSchema = new mongoose.Schema({
    score: Number,
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Type.ObjectId, ref: 'Product' }
});

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = { Rating, RatingSchema };