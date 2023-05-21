const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const stockController = require('./../controllers/stock.controller')
const {rateLimiter} =require('../middlewares/auth.middleware')


router.post('/addstock',limiter,stockController.addStock);

router.get('/stocks',limiter,stockController.fetchAllStocks);

router.patch('/updatestock/:id',limiter,stockController.updateStock);

module.exports=router;