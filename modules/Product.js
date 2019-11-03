const express = require("express");
const router = express.Router();
const { Product } = require("../models/products");
ObjectId = require("mongoose").Types.ObjectId;

// GET PRODUCT LIST
router.post("/products", (req, res) => {
  const { pagination } = req.body;
  console.log(pagination);
  Product.find()
    .populate('brand')
    .populate('category')
    .populate('discount')
    .limit(pagination ? pagination.perpage : 0)
    .skip(pagination ? (pagination.page - 10) * pagination.perpage : 0)
    .then(result => {
      Product.countDocuments(Product).then(total => {
        return res.status(200).send({
          data: result,
          total
        });
      });
    })
    .catch(error => console.log(error));
});

// GET PRODUCT BY ID
router.post("/getProduct", (req, res) => {
  Product.findById(req.body.id)
    .populate('brand')
    .populate('category')
    .populate('discount')
    .then(result => res.send({ data: { result } }))
    .catch(error => console.log(error));
});

// ADD PRODUCT
router.post("/addproduct", (req, res) => {
  console.log(req.body.data)
  const {
    name,
    price,
    description,
    quantity,
    brand,
    category,
    discount,
    productImage
  } = req.body.data;

  const newProduct = new Product({
    name,
    price,
    description,
    quantity,
    brand: ObjectId(brand),
    category: ObjectId(category),
    discount: discount ? ObjectId(discount) : null,
    productImage,
    active: true
  });

  newProduct
    .save()
    .then(result => {
      console.log(result);
      return res.status(200).send({ data: result });
    })
    .catch(error => {
      console.log(error);
      return res.status(400);
    });
});

// REMOVE PRODUCT (logic)
router.post("/removeproduct/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: { active: false }
  }).then(result => {
    return res.send({ data: result });
  });
});

// RETORE PRODUCT (logic)
router.post("/retoreproduct/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: { active: true }
  }, { new: true }).then(result => {
    return res.send({ data: result });
  });
});

router.post("/updateProduct", (req, res) => {
  Product.findByIdAndUpdate(req.body.id, req.body, { overwrite: true, useFindAndModify: false })
    .then(result => res.status(200).send({ data: result }))
    .catch(error => res.status(401).send({ message: error }))
});

module.exports = router;
