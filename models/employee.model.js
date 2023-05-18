const mongoose= require('mongoose');

const employeeSchema=mongoose.Schema({
    "e_name":{type:String,required:[true,'Name is required'],},
    "e_address":{type:String,required:[true,'Address is required']},
    "e_contact":{type:String,required:[true,'Contact is required']},
    "e_position":{type:String,required:[true,'Position is required']},
    "e_employeeInfo":{type: {
        "salary":{type:Number,default:0},
        "bonus":{type:Number,default:0},
        "commiossion":{type:Number,default:0},
        "amount":{type:String,default:0},
        "sellQty":{type:String,default:0},
        "date_time":{type:Date,}, 
        "salary_updatedOn":{type:Date},
    }},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })

    employeeSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })

    const EmployeeModel=mongoose.model("employee",employeeSchema);



    module.exports=EmployeeModel;