const router= require('express').Router();
const { limiter } = require('./../middlewares/auth');
const accessController = require('./../controllers/access.controller')


router.post('/access',limiter,accessController.addAccess);
router.patch('/access/:id',limiter,accessController.updateAccess);
router.get('/access',limiter,accessController.fetchAllAccess);


module.exports=router;