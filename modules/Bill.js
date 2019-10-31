const {Bill} = require('../models/bill');
const {BillDetail} = require('../models/billDetail');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
ObjectId = require("mongoose").Types.ObjectId;

router.post('/createBill', (req, res)=>{
    const {billDetail,quantity,user,isUser,nonUser,address} = req.body.data
    if(!_.isEmpty(billDetail)){
        billDetail.forEach(element => {
            element.price = element.price * quantity
            element.product = ObjectId(element.productId)
        });
        BillDetail.insertMany(billDetail)
        .then((result) => {
            let detail = []
            result.forEach(element => detail.push(element._id))
            const newBill = new Bill({  
                user,
                isUser,
                nonUser,
                address,
                billDetail:detail
            })
            newBill.save()
            .then(bill => {
                console.log(bill)
                return res.status(200).send(bill)
            })
            .catch(err => {
                console.log(err)
                return res.status(401).send(err)
            })
            
        }).catch((err) => {
            return res.status(401).send(err)
        });
    } else res.status(401).send("Can't create empty bill")
})
router.post('/getBills',((req,res) => { 
    Bill.find()
    .populate({path:'billDetail',populate:{
        path:'product'
    }})
    .then(result => {
        return res.status(200).send(result)
    })
}))
module.exports = router