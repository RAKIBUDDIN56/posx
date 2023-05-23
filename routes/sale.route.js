const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const saleController = require('./../controllers/sale.controller')



router.post('/add-sale',limiter,saleController.addSale);

router.get('/sales',limiter,saleController.fetchAllSales);

router.patch('/update-sale/:id',limiter,saleController.updateSale);

module.exports=router;