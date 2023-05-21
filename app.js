const express=require('express');
const app= express();
const cors = require('cors');
require('dotenv').config(); 
const db=require('./config/dbconfig');
const router = require('./routes/route_list.js');

// const auth = require("./middlewares/auth.js");
const errors = require("./middlewares/errors.js");

app.use(cors())
app.use(express.json())

// const unless  =require("express-unless");
// auth.authenticateToken.unless = unless;
// app.use(
//     auth.authenticateToken.unless({
//       path: [
//         { url: "/api/v1/login", methods: ["POST"] },
//         { url: "/api/v1/register", methods: ["POST"] },
//       ],
//     })
//   );

app.use('/api/v1',router);
app.use(errors.errorHandler);



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server started at port:' +port);
});

