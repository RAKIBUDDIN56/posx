const SupplierModel=require('./../models/supplier.model')
const tryCatch=require('./../utils/tryCatch')

exports.addSupplier=tryCatch.tryCatch(async (req,res)=>{
    console.log(req.body);
const customer=new SupplierModel(req.body);
customer.save().then(()=>{
    return res.send({
        "success":true,
        message: "Supplier created successfully",
        "data":req.body});

}).catch((e)=>{
    return res.status(400).send({
        "success":false,
        "data":e});

    
})

})
exports.updateSuppier=async(req,res,next)=>{
    
    const suppierId=req.params.id;
    console.log(req.body);

    try{
          // create a filter for a movie to update
          const filter = { _id: suppierId, };
          // this option instructs the method to create a document if no documents match the filter
          const options = { upsert: false,new:true};
          // create a document that sets the plot of the 
          const supplier =  req.body;
        console.log(supplier);     
  
          const updateDoc = {
              $set: supplier,  
              
            
              
          };
          const supplierData = await SupplierModel.findByIdAndUpdate(filter, updateDoc, options);
          return res.status(200).json({
              success: true,
              message: "Supplier updated successfully",
              data: supplierData,
          })


    }catch(error){
        return next(error.message);

    }

}
