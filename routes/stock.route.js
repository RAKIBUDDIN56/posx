const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const stockController = require('./../controllers/stock.controller')
const {rateLimiter} =require('../middlewares/auth.middleware')


router.post('/stock',limiter,stockController.addStock);

router.get('/stock',limiter,stockController.fetchAllStocks);

router.patch('/stock/:id',limiter,stockController.updateStock);

module.exports=router;