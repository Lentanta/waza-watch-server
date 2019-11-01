const express = require('express');
const router = express.Router();
const { Brand } = require('../models/brands') 

router.post('/brands',(req, res) => {
    const {pagination} = req.body
    Brand.find()
    .limit(pagination ? pagination.perpage : 0)
    .skip(pagination ? (pagination.page - 10) * pagination.perpage:0)
    .then((result) => {
      Brand.countDocuments(Brand).then(total => {
        return res.status(200).send({
          data: result,
          total
        })
      })
      
      })
      .catch((error) => console.log(error))
  });

  router.post('/getBrand', (req, res) => {
    Brand.findById(req.body.id)
      .then((result) => res.send({data:result}))
      .catch((error) => console.log(error))
  });

  router.post('/addBrand', (req, res) => {
    const { name } = req.body;
  
    const newBrand = new Brand({
      name, active: true
    });
    
    newBrand.save()
      .then((result) => {
        console.log(result);
        return res.status(200).send({data:result});
      })
      .catch((error) => {
        console.log(error)
        return res.status(400);
      })
  });
  
  router.post('/getBrandByArray', (req,res) => {
      const {ids} = req.body
      Brand.find({_id:ids})
      .then(brands => {
        return res.status(200).send(
          {data:brands}
        )
      }).catch((error) => {
        console.log(error)
        return res.status(400);
      })
  })

module.exports = router;