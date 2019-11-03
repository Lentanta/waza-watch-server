const express = require("express");
const router = express.Router();
const { User } = require('../models/user');
ObjectId = require("mongoose").Types.ObjectId;


// ---  GET USER LIST --- //
router.post('/users', (req, res) => {
    User.find()
        .then((result) => {
            return res.status(200).send({ data: result });
        })
        .catch((error) => {
            console.log(error);
            return res.status(400);
        })
});

// ---  CREATE USER --- //
router.post('/adduser', (req, res) => {
    console.log(req.body);
    const { userName, password, email, phone, birthday, gender } = req.body.data;
    const newUser = new User({
        userName,
        password,
        email,
        phone,
        birthday,
        gender,
        role: "USER"
    });

    newUser.save()
        .then((result) => {
            console.log(result);
            return res.status(200).send({ data: result });
        })
        .catch((error) => {
            console.log(error);
            return res.status(400);
        });
});

// --- FIND USER BY ID --- //
router.post("/getuser", (req, res) => {
    User.findById(req.body.id)
        .then(result => res.send({ data: { result } }))
        .catch(error => console.log(error));
});

// --- USER LOGIN --- //
router.post("/userlogin", (req, res) => {
    const { userName, password } = req.body;
    User.findOne({ userName, password })
        .then(result => res.send({ data: { result } }))
        .catch(error => console.log(error));
});

// --- UPDATE USER --- //

// --- REMOVE USER (logic) --- //

// --- GET BILLS OF USER --- // 


module.exports = router;

