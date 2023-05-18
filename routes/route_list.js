
const stockRouter = require('./../routes/stock.route');
const authRouter = require('./../routes/auth.route');
const employeeRouter = require('./../routes/emeployee.route');

const routelist=[stockRouter,authRouter,employeeRouter]

module.exports = routelist;