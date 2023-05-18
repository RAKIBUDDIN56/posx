const router= require('express').Router();
const authController = require('./../controllers/auth.controoller')

router.route('/login').post(authController.login);


module.exports=router;