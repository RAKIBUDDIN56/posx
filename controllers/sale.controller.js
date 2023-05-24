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
  
    const saleData = await SaleModel.find({}, { _id: 0, __v: 0, createdOn: 0, updatedOn: 0 }).lean().then((results)=>{
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
exports.updateSale = tryCatch(async (req, res) => {
    const saleId = req.params.id;

    
        // create a filter for a movie to update
        const filter = { _id: saleId };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: false ,new:true};
        // create a document that sets the plot of the movie
        const sale = req.body;
        console.log(sale);
        const updateDoc = {
            $set: sale,
        };
        const stockData = await SaleModel.findByIdAndUpdatex(filter, updateDoc, options).then((results)=>{
            console.log(results);
            return res.status(200).json({
                success: true,
                message: "Sale updated successfully",
                data: results,
            })
        }).catch((error)=>{
            console.log(error);
            return res.status(400).send({
                "success":false,
                "data":error});
        })
       
   

})