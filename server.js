// 3rd-party package  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// modules
const Product = require('./modules/Product');

// CONECT DATABASE
mongoose.connect('mongodb+srv://admin:admin@waza-watch-0spzt.gcp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(() => console.log('Connect to waza-watch DB'))
  .catch((err) => console.log(err))

// SERVER SETUP
const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// ROUTER
server.use('/api', Product);

server.listen(7777, () => console.log('listen to port 7777'))