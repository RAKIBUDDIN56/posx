const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const employeeController = require('./../controllers/employee.controller')
const {rateLimiter} =require('../middlewares/auth.middleware')

router.post('/add-employee',limiter,employeeController.addEmployee);


module.exports=router;