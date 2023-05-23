const mongoose= require('mongoose');

const saleSchema=mongoose.Schema({
    "invoice_no":{type:String,unique:true,required:[true,'Invoice no is required'],},
    "customer_name":{type:String,required:[true,'Customer name is required']},
    "customer_id":{type:mongoose.Schema.Types.ObjectId,ref:"customers"},
    "amount":{type:Number,required:[true,'Amount is required']},
    "discount":{type:Number,required:[true,'Discount is required']},
    "vat":{type:Number,required:[true,'Vat is required']},
    "paidBy":{type:String,required:[true,'Payment method is required']},
    "date":{type:Date,required:[true,'Product date is required']},
    "createdOn":{type:Date},
    "updatedOn":{type:Date},
    })

    saleSchema.pre("save",async function(next){
        this.createdOn=new Date();
        this.updatedOn=new Date();
        next();
    })
    saleSchema.post("save",async function(doc){
       // delete doc[_id];
        console.log('post called');
       // console.log(doc);
        ;
    })


    const SaleModel=mongoose.model("sales",saleSchema);



    module.exports=SaleModel;




 


