const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const customerController = require('./../controllers/customer.controller')
const tryCatch=require("./../utils/tryCatch")

router.post('/add-customer',limiter,customerController.addCustomer);
router.patch('/update-customer/:id',limiter,customerController.updateCustomer);

module.exports=router;