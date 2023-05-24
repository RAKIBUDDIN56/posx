
const stockRouter = require('./../routes/stock.route');
const authRouter = require('./../routes/auth.route');
const employeeRouter = require('./../routes/emeployee.route');
const customerRouter = require('./../routes/customer.route');
const saleRouter=require('./../routes/sale.route');
const saleItemRouter=require('./../routes/saleItem.route');
const supplierRouter=require('./../routes/supplier.route');

const routelist=[stockRouter,authRouter,employeeRouter,customerRouter,saleRouter,saleItemRouter,supplierRouter]

module.exports = routelist;