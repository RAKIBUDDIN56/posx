const mongoose= require('mongoose');

const customerSchema=mongoose.Schema({
   
    "c_name":{type:String,required:[true,'Name is required'],},
    "c_address":{type:String,required:[true,'Address is required']},
    "c_contact":{type:String,required:[true,'Contact is required']},
    "c_email":{type:String,required:[true,'Email is required']},
    "date_time":{type:Date,}, 
    "c_due":{type: {
        "amount":{type:Number,default:0},
        "paid":{type:Number,default:0},
        "date_time":{type:Date,},
       
    }},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })
    customerSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })
    customerSchema.pre('findOneAndUpdate', function(next) {
        console.log("pre called");
        
        // Exclude the '_id' field from being updated
        {_id:0}
        next();
      });
    
    const CustomerModel=mongoose.model("customers",customerSchema);
    module.exports=CustomerModel;