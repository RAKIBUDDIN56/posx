const router= require('express').Router();
const employeeController = require('./../controllers/employee.controller')

router.route('/add-employee').post(employeeController.addEmployee);
router.route('/employees').get(employeeController.fetchStocks);
router.route('/update-stock/:id').patch(employeeController.updateStock);



module.exports=router;