const express = require("express");
const router = express.Router();
const { Voucher } = require('../models/voucher');

// ---  Get Voucher list --- //
router.post('/vouchers', (req, res) => {
  Voucher.find()
    .then((result) => {
      return res.status(200).send({ data: result });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400);
    })
});

// --- Create new voucher --- //
router.post('/addvoucher', (req, res) => {
  const { name, voucherDiscount, voucherDescription } = req.body;
  // Mã sinh ra ramdom code cho voucher
  const rndCode = (Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5)).toUpperCase();
  const newVoucher = new Voucher({
    name,
    voucherDiscount,
    voucherDescription,
    voucherCode: rndCode
  });
  newVoucher.save()
    .then((result) => {
      console.log(result);
      return res.status(200).send({ data: result });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400);
    });
});

// --- Get voucher by code --- //
router.post('/getvoucher', (req, res) => {
  const { code } = req.body;
  Voucher.find({ voucherCode: code })
    .then((result) => {
      return res.status(200).send({ data: result });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400);
    })
});

module.exports = router;