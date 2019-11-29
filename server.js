// 3rd-party package  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// modules
const Product = require('./modules/Product');
const Brand = require('./modules/Brand');
const Bill = require('./modules/Bill');
const Category = require('./modules/Categories')
const User = require('./modules/User');
const Rating = require('./modules/Rating');
const Voucher = require('./modules/Voucher');

// CONECT DATABASE
mongoose.connect('mongodb+srv://admin:admin@waza-watch-0spzt.gcp.mongodb.net/waza-watch?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(() => {
    console.log('success db');
    //NOTE : Don't touch this !
    // const injector = require('./mockup/injectMockup')
    // injector.brandMockup()
    // injector.categoryMockup()
    // injector.discountMockup()
    // injector.voucherMockup()
  })
  .catch((err) => console.log(err))

// SERVER SETUP
const server = express();
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(cors())

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
//Injector Mockup
// ROUTER
server.use('/api/product', Product);
server.use('/api/brand', Brand);
server.use('/api/bill', Bill);
server.use('/api/category', Category);
server.use('/api/user', User);
server.use('/api/rating', Rating);
server.use('/api/voucher', Voucher);

server.listen(3000, () => console.log('listen to port 3000'))