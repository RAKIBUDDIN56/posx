const router= require('express').Router();
const { limiter } = require('../middlewares/auth');
const customerController = require('./../controllers/customer.controller')


router.post('/add-customer',limiter,customerController.addCustomer);
router.patch('/update-customer/:id',limiter,customerController.updateCustomer);

// get('/customers')
// get('/customer/create')//for form
// post('/customer')
// get('/customer/:id')
// get('customer/:id/edit') //
// put('/customer/:id')
// delete('/customer/:id')
module.exports=router;