const router=require('express').Router();
const {limiter}=require('./../middlewares/auth');
const unitController=require('./../controllers/unit.controller')

router.post('/unit',limiter,unitController.addUnit);
router.get('/unit',limiter,unitController.fetchAllAccess);
router.patch('/unit/:id',limiter,unitController.updateAccess);


module.exports=router;