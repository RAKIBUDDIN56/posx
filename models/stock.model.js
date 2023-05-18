const mongoose= require('mongoose');

const stockSchema=mongoose.Schema({
    "pname":{type:String,required:[true,'Product name is required'],},
    "pcat":{type:String,required:[true,'Product category is required']},
    "pcode":{type:String,required:[true,'Product group is required']},
    "pgroup":{type:String,required:[true,'Product group is required']},
    "unit":{type:String,required:[true,'Product unit is required']},
    "qty":{type:Number,required:[true,'Product quantity is required']},
    "supp":{type:String,required:[true,'Product supplier is required']},
    "price":{type:Number,required:[true,'Product price is required']},
    "sprice":{type:Number,required:[true,'Product sprice is required']},
    "date":{type:Date,required:[true,'Product date is required']},
    "status":{type:String,required:[true,'Product status is required']},
    "barcode":{type:String,required:[true,'Product barcode is required']},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })

    stockSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })

    const StockModel=mongoose.model("stock",stockSchema);



    module.exports=StockModel;




 


