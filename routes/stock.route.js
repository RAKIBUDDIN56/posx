const router= require('express').Router();
const stockController = require('./../controllers/stock.controller')
const {rateLimiter} =require('../middlewares/auth.middleware')

router.route('/addstock').post(rateLimiter,stockController.addStock);
router.route('/stocks').get(rateLimiter,stockController.fetchStocks);
router.route('/updatestock/:id').patch(rateLimiter,stockController.updateStock);


module.exports=router;