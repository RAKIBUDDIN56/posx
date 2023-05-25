const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const saleItemController = require('./../controllers/saleItem.controller')



router.post('/saleItem',limiter,saleItemController.addSaleItem);

router.get('/saleItem',limiter,saleItemController.fetchAllSaleItems);

router.patch('/saleItem/:id',limiter,saleItemController.updateSaleItem);

module.exports=router;