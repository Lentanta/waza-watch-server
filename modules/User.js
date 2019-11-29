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

// ---  CREATE USER (SIGN UP) --- //
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

router.post("/getusers", (req, res) => {
        const { pagination } = req.body;
        User.find()
          .limit(pagination ? pagination.perpage : 0)
          .skip(pagination ? (pagination.page - 10) * pagination.perpage : 0)
          .then(result => {
            User.countDocuments(User).then(total => {
              return res.status(200).send({
                data: result,
                total
              });
            });
          })
          .catch(error => console.log(error));
});

router.post("/getusersarray", (req, res) => {
        const { ids } = req.body;
        User.find({_id:ids})
          .then(result => {
            User.countDocuments(User).then(total => {
              return res.status(200).send({
                data: result,
                total
              });
            });
          })
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
router.post("/getusers", (req, res) => {
    const { pagination } = req.body;
    User.findById(req.body.id)
        .then(result => res.send({ data: { result } }))
        .catch(error => console.log(error));
});

// --- REMOVE USER (logic) --- //

// --- GET BILLS OF USER --- // 


module.exports = router;

