const AccessModel=require('./../models/access.model')
const {tryCatch}=require('./../utils/tryCatch')

exports.addAccess=tryCatch(async (req,res)=>{
    console.log(req.body);
const customer=new AccessModel(req.body);
customer.save().then(()=>{
    return res.send({
        "success":true,
        message: "Access created successfully",
        "data":req.body});

}).catch((error)=>{
    return res.status(400).send({
        "success":false,
        "data":error});

    
})

})
exports.fetchAllAccess = tryCatch(async (req, res,) => {
  
    await AccessModel.find({}, { _id: 0, __v: 0, createdOn: 0, updatedOn: 0 }).lean().then((results)=>{
        return res.status(200).json({
            success: true,
            message: "Data fatch successfully",
            data: results,
        })
    }).catch((error)=>{
        console.log(error);
        return res.status(400).send({
            "success":false,
            "data":error});
    })
        
    
   


})
exports.updateAccess=async(req,res,next)=>{
    
    const accessId=req.params.id;
    console.log(req.body);

    try{
          // create a filter for a  to update
          const filter = { _id: accessId, };
          // this option instructs the method to create a document if no documents match the filter
          const options = { upsert: true,new:true};
          // create a document that sets the plot of the 
          const access =  req.body;
        console.log(access);     
  
          const updateDoc = {
              $set: access,  
              
            
              
          };
          const accessData = await AccessModel.findByIdAndUpdate(filter, updateDoc, options);
          return res.status(200).json({
              success: true,
              message: "Access updated successfully",
              data: accessData,
          })


    }catch(error){
        return next(error.message);

    }

}
