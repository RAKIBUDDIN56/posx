const EmployeeModel=require('./../models/employee.model')

exports.addEmployee=async (req,res)=>{
    console.log(req.body);
const employee=new EmployeeModel(req.body);
employee.save().then(()=>{
    return res.send({
        "success":true,
        "data":req.body});

}).catch((e)=>{
    return res.send({
        "success":false,
        "data":e});

    
})

}
exports.fetchStocks=async(req,res)=>{
   try{
    const stockData= await EmployeeModel.find();
    return res.json({"success":true,"stocks":stockData})
   }catch(error){
    return res.json({"success":false,"message":error})

   }

}
exports.updateStock=async(req,res)=>{
    const stockId=req.params.id;
   
    try{
        // create a filter for a movie to update
    const filter = {_id:stockId};
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };
    // create a document that sets the plot of the movie
    const stock=EmployeeModel(req.body);
    console.log(stock);

    const updateDoc = {
      $set:stock,
    };
     const stockData= await EmployeeModel.updateOne(filter,updateDoc,options);
     return res.json({"success":true,"stocks":stockData})
    }catch(error){
     return res.json({"success":false,"message":error})
 
    }
 
 }