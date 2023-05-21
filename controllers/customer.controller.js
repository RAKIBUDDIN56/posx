const CustomerModel=require('./../models/customer.model')


exports.addCustomer=async (req,res)=>{
    console.log(req.body);
const customer=new CustomerModel(req.body);
customer.save().then(()=>{
    return res.send({
        "success":true,
        message: "Customer created successfully",
        "data":req.body});

}).catch((e)=>{
    return res.status(400).send({
        "success":false,
        "data":e});

    
})

}
exports.updateCustomer=async(req,res,next)=>{
    
    const customerId=req.params.id;
    console.log(customerId);

    try{
          // create a filter for a movie to update
          const filter = { _id: customerId };
          // this option instructs the method to create a document if no documents match the filter
          const options = { upsert: false,};
          // create a document that sets the plot of the movie
          const customer =  CustomerModel(req.body);
   console.log(customer);     
  
          const updateDoc = {
              $set: customer,  
              
          };
          const customerData = await CustomerModel.findByIdAndUpdate(filter, updateDoc, options);
          return res.status(200).json({
              success: true,
              message: "Customer updated successfully",
              data: customerData,
          })


    }catch(error){
        return next(error.message);

    }

}
