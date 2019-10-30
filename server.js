// 3rd-party package  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// modules
const Product = require('./modules/Product');
const Brand = require('./modules/Brand');


// CONECT DATABASE
mongoose.connect('mongodb+srv://admin:admin@waza-watch-0spzt.gcp.mongodb.net/waza-watch?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(() => {
    console.log('success db');
    // const injector = require('./mockup/injectMockup')
    // injector.brandMockup()
    // injector.categoryMockup()
    // injector.discountMockup()
    // injector.voucherMockup()
  })
  .catch((err) => console.log(err))
   
// SERVER SETUP
const server = express();
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
//Injector Mockup
// ROUTER
server.use('/api/product', Product);
server.use('/api/brand', Brand);


server.listen(7777, () => console.log('listen to port 7777'))