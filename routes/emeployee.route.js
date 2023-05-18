const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const employeeController = require('./../controllers/employee.controller')

router.post('/add-employee',limiter,employeeController.addEmployee);
router.get('/employees',limiter,employeeController.fetchStocks);
router.put('/update-stock/:id',limiter,employeeController.updateStock);

module.exports=router;