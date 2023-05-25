const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const saleController = require('./../controllers/sale.controller')



router.post('/sale',limiter,saleController.addSale);

router.get('/sale',limiter,saleController.fetchAllSales);

router.patch('/sale/:id',limiter,saleController.updateSale);

module.exports=router;