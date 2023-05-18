const router= require('express').Router();
const stockController = require('./../controllers/stock.controller')

router.route('/addstock').post(stockController.addStock);
router.route('/stocks').get(stockController.fetchStocks);
router.route('/updatestock/:id').patch(stockController.updateStock);



module.exports=router;