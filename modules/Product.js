const express = require('express');
const router = express.Router();
const { Product } = require('../models/products');

// GET PRODUCT LIST
router.get('/products', (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((error) => console.log(error))
});

// GET PRODUCT BY ID
router.get('/products/:id', (req, res) => {
  Product.find({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((error) => console.log(error))
});

// ADD PRODUCT
router.post('/addproduct', (req, res) => {
  const { name, price, description, quantity, brand, category, discount } = req.body;

  const newProduct = new Product({
    name, price, description, quantity, brand, category, discount, active: true
  });

  newProduct.save()
    .then((result) => {
      console.log(result);
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error)
      return res.status(400);
    })
});

// REMOVE PRODUCT (logic)
router.post('/removeproduct/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: { active: false }
  })
    .then((result) => {
      return res.send(result)
    })
});

// RETORE PRODUCT (logic)
router.post('/retoreproduct/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: { active: true }
  })
    .then((result) => {
      return res.send(result)
    })
});

module.exports = router;