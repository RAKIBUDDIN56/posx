const mongoose= require('mongoose');

const loginSchema=mongoose.Schema({
    "username":{type:String,},
    "password":{type:String},
    "roll":{type:String},
    // "createdOn":{type:Date},
    
    })

    // loginSchema.pre("save",async function(next){
    //     this.createdOn=new Date();
    //     next();
    // })

    const LoginModel=mongoose.model("loginInfo",loginSchema);

    module.exports=LoginModel;