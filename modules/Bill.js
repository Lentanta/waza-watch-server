const {Bill} = require('../models/bill');
const {BillDetail} = require('../models/billDetail');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
ObjectId = require("mongoose").Types.ObjectId;

router.post('/createBill', (req, res)=>{
    console.log(req.body)
    const {billDetail,user,isUser,nonUser,address} = req.body.data
    if(!_.isEmpty(billDetail)){
        billDetail.forEach(element => {
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
    .sort({ createAt: -1})
    .then(result => {
        Bill.countDocuments().then(total=>{
            return res.status(200).send({data:result,total})
        })
    })
}))
router.post('/getBill',(req,res)=>{
    console.log(req.body)
    Bill.findById(req.body.id)
    .sort({ createAt: -1})
    .then(result => {
        BillDetail.find({_id:result.billDetail,active:true}).then(detail=>{
            let price = 0;
            detail.map(element => price += Number(element.price))
            const newResult = {...result._doc,totalPay:price}

            return res.status(200).send({data:newResult})
        })
    })
})
router.post('/getBillDetailByArray',(req,res)=>{
    BillDetail.find({_id:req.body.ids,active:true})
    .sort({ createAt: -1})
    .populate('product')
    .then(result => {
        return res.status(200).send({data:result,total:result.length})
    }) 
})
router.post('/deleteBillDetail',(req,res)=>{

})
module.exports = router