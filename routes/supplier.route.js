const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const supplierController = require('./../controllers/supplier.controller')


router.post('/supolier',limiter,supplierController.addSupplier);
router.patch('/supplier/:id',limiter,supplierController.updateSuppier);

module.exports=router;