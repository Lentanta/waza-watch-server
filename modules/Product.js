const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// GET PRODUCT LIST
router.get('/products', (req, res) => {
  return res.send('THIS IS PRODUCT LIST');
});

// GET PRODUCT BY ID
router.get('/products/:id', (req, res) => {
  return res.send(req.params.id);
});

// ADD PRODUCT
router.post('/addproduct', (req, res) => {
  const { name, price, description, quantity } = req.body;

  const newProduct = new Product({
    name, price, description, quantity
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

// DELETE PRODUCT

module.exports = router;