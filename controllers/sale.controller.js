const SaleModel = require('./../models/sale.model')
const {tryCatch}=require('./../utils/tryCatch')

exports.addSale = tryCatch(async (req, res,) => {
   // console.log(req.body);
   
        const sale = new SaleModel(req.body);
        sale.save().then((results) => {
           // console.log(results._id);
       var rr= JSON.parse(results);
       console.log(rr);
            return res.status(200).json({
                success: true,
                message: "Sale added successfully",
                data: results,
            });

        }).catch((e) => {
            console.log(e);
            return res.status(400).send({
                "success":false,
                "data":e});
        });

  


})
exports.fetchAllSales = tryCatch(async (req, res,) => {
  
    const saleData = await SaleModel.find({}, { _id: 0, __v: 0, createdOn: 0, updatedOn: 0 }).then((results)=>{
        return res.status(200).json({
            success: true,
            message: "Data fatch successfully",
            data: saleData,
        })
    }).catch((error)=>{
        return res.status(400).send({
            "success":false,
            "data":e});
    })
        
    
   


})
exports.updateSale = tryCatch(async (req, res) => {
    const stockId = req.params.id;

    
        // create a filter for a movie to update
        const filter = { _id: stockId };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const stock = SaleModel(req.body);
        console.log(stock);

        const updateDoc = {
            $set: stock,
        };
        const stockData = await SaleModel.updateOne(filter, updateDoc, options).then((results)=>{
            return res.status(200).json({
                success: true,
                message: "Sale updated successfully",
                data: stockData,
            })
        }).catch((error)=>{
            return res.status(400).send({
                "success":false,
                "data":e});
        })
       
   

})