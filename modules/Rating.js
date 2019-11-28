const express = require("express");
const router = express.Router();
const { Rating } = require('../models/rating');
const { Product } = require('../models/products');
ObjectId = require("mongoose").Types.ObjectId;


// --- LIST RATING --- //
router.post('/ratings',(req,res)=>{
  Rating.find()
  .then((result)=>{
    return res.status(200).send(result);
  })
  .catch((err)=>{
    return res.status(401).send(err);
  })
});

// ---  CREATE RATING --- //
router.post('/createRating', (req, res) => {
  const { score, content, user, product } = req.body;
  const newRating = new Rating({
    score,
    content,
    user: ObjectId(user),
    product: ObjectId(product)
  });
  newRating.save()
    .then(() => {
      return res.status(200).send("Success")
    })
    .catch((err) => {
      return res.status(401).send(err)
    })
});

// --- LIST RATING OF PRODUCT --- //
router.post('/getRating', (req, res) => {
  Product.findById(req.body.id)
  .then((product)=>{
    Rating.find({product: product._id})
    .populate('user')
    .then((result)=>{
      return res.status(200).send(result);
    })
  })
  .catch((err)=>{
    return res.status(401).send("Cannot get product");
  })
})

module.exports = router;