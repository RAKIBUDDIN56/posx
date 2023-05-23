
const stockRouter = require('./../routes/stock.route');
const authRouter = require('./../routes/auth.route');
const employeeRouter = require('./../routes/emeployee.route');
const customerRouter = require('./../routes/customer.route');
const saleRouter=require('./../routes/sale.route')

const routelist=[stockRouter,authRouter,employeeRouter,customerRouter,saleRouter]

module.exports = routelist;