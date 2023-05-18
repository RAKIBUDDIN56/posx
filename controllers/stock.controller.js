const StockModel=require('./../models/stock.model')

exports.addStock=async (req,res)=>{

    console.log(req.body);
     
const stock=new StockModel(req.body);
stock.save().then((value)=>{
    console.log(value);
    return res.send({
        "success":true,
        "message":"Stock added successfully",
        "data":value});

}).catch((e)=>{
    return res.status(400).send({
        "success":false,
        "message":e,
        "data":{}});

    
})

}
exports.fetchStocks=async(req,res)=>{
   try{
    const stockData= await StockModel.find();
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
    const stock=StockModel(req.body);
    console.log(stock);

    const updateDoc = {
      $set:stock,
    };
     const stockData= await StockModel.updateOne(filter,updateDoc,options);
     return res.json({"success":true,"stocks":stockData})
    }catch(error){
     return res.json({"success":false,"message":error})
 
    }
 
 }