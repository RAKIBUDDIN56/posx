const express=require('express');
const app= express();
const cors = require('cors');
const db=require('./services/db')

app.use(cors())
app.use(express.json())
const stockRouter = require('./routes/stock.route');
app.use('/api',stockRouter);
const authRouter = require('./routes/auth.route');
app.use('/api',authRouter);
const employeeRouter = require('./routes/emeployee.route');
app.use('/api',employeeRouter);

app.listen(5000,()=>{
    console.log("Server is running");

})
    

