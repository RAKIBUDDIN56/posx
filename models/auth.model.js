const mongoose= require('mongoose');

const loginSchema=mongoose.Schema({
    "username":{type:String,},
    "password":{type:String},
    "roll":{type:String},
    // "createdOn":{type:Date},
    
    })

    const LoginModel=mongoose.model("loginInfo",loginSchema);

    module.exports=LoginModel;