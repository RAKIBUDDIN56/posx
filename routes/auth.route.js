const router= require('express').Router();
const { limiter } = require("./../middlewares/auth");
const authController = require('./../controllers/auth.controoller')


router.post("/login", limiter, authController.login);

module.exports=router;