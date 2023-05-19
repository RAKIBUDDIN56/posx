const router= require('express').Router();
const authController = require('./../controllers/auth.controoller')
const {rateLimiter} =require('../middlewares/auth.middleware')

router.route('/login').post(rateLimiter ,authController.login);

module.exports=router;