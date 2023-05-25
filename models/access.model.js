const mongoose= require('mongoose');

const accessSchema=mongoose.Schema({
   
    "access_roll":{type:String,required:[true,'Access role is required'],},
    "access":{type:String,required:[true,'Access is required']},
    "status":{type:Boolean,required:[true,'Status is required']},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })
    accessSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })
    accessSchema.pre(["update", "findOneAndUpdate", "updateOne"], function(next) {
        const update = this.getUpdate();
        delete update._id;
        this.updatedOn = new Date(); 
        next();
      });
    
    const AccessModel=mongoose.model("access",accessSchema);
    module.exports=AccessModel;