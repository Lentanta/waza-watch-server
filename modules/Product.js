const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  return res.send('THIS IS PRODUCT LIST');
});

router.get('/products/:id', (req, res) => {
  return res.send(req.params.id);
});

module.exports = router;