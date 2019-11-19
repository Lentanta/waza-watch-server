const express = require("express");
const router = express.Router();
const { Rating } = require('../models/rating');
ObjectId = require("mongoose").Types.ObjectId;

// ---  CREATE RATING --- //
router.post('/createBill', (req, res) => {
  const { score, content, user, product } = req.body;
  const newRating = new Rating({
    score,
    content,
    user: ObjectId(user),
    product: ObjectId(product)
  });
  newRating.save()
});


module.exports = router;