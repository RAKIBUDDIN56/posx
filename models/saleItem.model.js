const mongoose= require('mongoose');

const saleItemsSchema=mongoose.Schema({
    "invoice_id":{type:String,unique:true,required:[true,'Invoice no is required'],},
    "customer_id":{type:mongoose.Schema.Types.ObjectId,ref:"customers"},
    "product_name":{type:String,required:[true,'Product name is required']},
    "product_category":{type:String,required:[true,'Product category is required']},
    "product_code":{type:String,required:[true,'Product code is required']},
    "qty":{type:Number,required:[true,'Product quantity is required']},
    "product_supplier":{type:String,required:[true,'Product supplier is required']},
    "product_price":{type:Number,required:[true,'Product price is required']},
    "supplier_price":{type:Number,required:[true,'Product supplier price is required']},
    "product_price":{type:Number,required:[true,'Product price is required']},
    "barcode":{type:String,required:[true,'Product barcode is required']},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })

    saleItemsSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })

    const SaleItemModel=mongoose.model("saleItem",saleItemsSchema);



    module.exports=SaleItemModel;




 


