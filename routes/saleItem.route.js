const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const saleItemController = require('./../controllers/saleItem.controller')



router.post('/add-saleItem',limiter,saleItemController.addSaleItem);

router.get('/saleItems',limiter,saleItemController.fetchAllSaleItems);

router.patch('/update-saleItem/:id',limiter,saleItemController.updateSaleItem);

module.exports=router;