const router= require('express').Router();
const employeeController = require('./../controllers/employee.controller')
const {rateLimiter} =require('../middlewares/auth.middleware')

router.route('/add-employee').post(rateLimiter,employeeController.addEmployee);
router.route('/employees').get(rateLimiter,employeeController.fetchStocks);
router.route('/update-stock/:id').patch(rateLimiter,employeeController.updateStock);


module.exports=router;