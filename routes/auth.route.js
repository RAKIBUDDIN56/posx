const router= require('express').Router();
const { limiter } = require("./../middlewares/auth");
const authController = require('./../controllers/auth.controoller')
const {rateLimiter} =require('../middlewares/auth.middleware')


router.post("/login", limiter, authController.login);

module.exports=router;