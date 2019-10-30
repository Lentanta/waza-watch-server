const { Brand } = require('../models/brands')
const { Category } = require('../models/categories')
const { Discount } = require('../models/discounts')
const { Voucher } = require('../models/voucher')


const brandData = require('./brand.json')
const categoryData = require('./category.json')
const discountsData = require('./discount.json')
const voucherData = require('./voucher.json')

const ObjectId = require('mongoose').ObjectId;
injector = {}

injector.brandMockup = () => {
    Brand.insertMany(brandData)
    .then((result) => {
        console.log('Inject success')
    }).catch((err) => {
        console.log(err)
    });
}

injector.categoryMockup = () => {
    Category.insertMany(categoryData)
    .then((result) => {
        console.log('Inject success')
    }).catch((err) => {
        console.log(err)
    });
}

injector.discountMockup = () => {
    Discount.insertMany(discountsData)
    .then((result) => {
        console.log('Inject success')
    }).catch((err) => {
        console.log(err)
    });
}

injector.voucherMockup = () => {
    Voucher.insertMany(voucherData)
    .then((result) => {
        console.log('Inject success')
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = injector;