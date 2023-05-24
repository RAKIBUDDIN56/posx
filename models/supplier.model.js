const mongoose= require('mongoose');

const supplierSchema=mongoose.Schema({
   
    "supplier_name":{type:String,required:[true,'Name is required'],},
    "supplier_address":{type:String,required:[true,'Address is required']},
    "supplie_contact":{type:String,required:[true,'Contact is required']},
    "supplie_email":{type:String,required:[true,'Email is required']},
    "date_time":{type:Date,}, 
    "supplie_due":{type: {
        "amount":{type:Number,default:0},
        "paid":{type:Number,default:0},
        "date_time":{type:Date,},
       
    }},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })
    supplierSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })
    supplierSchema.pre(["update", "findOneAndUpdate", "updateOne"], function(next) {
        const update = this.getUpdate();
        delete update._id;
        this.updatedOn = new Date(); 
        next();
      });
    
    const SupplierModel=mongoose.model("suppliers",supplierSchema);
    module.exports=SupplierModel;