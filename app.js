const express=require('express');
const app= express();
const cors = require('cors');


app.use(cors())
app.use(express.json())
const stockRouter = require('./routes/stock.route');
app.use('/api/v1',stockRouter);
const authRouter = require('./routes/auth.route');
app.use('/api/v1',authRouter);
const employeeRouter = require('./routes/emeployee.route');
app.use('/api/v1',employeeRouter);

module.exports=app;
    

