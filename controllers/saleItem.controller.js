const SaleItemkModel = require('./../models/saleItem.model')
const {tryCatch} =require('./../utils/tryCatch')

exports.addSaleItem =tryCatch( async (req, res,) => {
    console.log(req.body);
        const stock = new SaleItemkModel(req.body);
        stock.save().then((results) => {
            console.log(results);
            return res.status(200).json({
                success: true,
                message: "Sale item added successfully",
                data: results,
            });

        }).catch((error) => {
            console.log(error);
            return res.status(400).send({
                "success":false,
                "data":error});
        });

    


})
exports.fetchAllSaleItems = async (req, res, next) => {
    try {
        const saleItemData = await SaleItemkModel.find({}, { _id: 0, __v: 0, createdOn: 0, updatedOn: 0 }).lean();
        return res.status(200).json({
            success: true,
            message: "Data fatch successfully",
            data: saleItemData,
        })
    } catch (err) {
        return next(err.message);
    }

}
exports.updateSaleItem = async (req, res,next) => {
    const saleItemId = req.params.id;

    try {
        // create a filter for a item to update
        const filter = { _id: saleItemId };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: false,new:true };
        // create a document that sets the plot of the 
        const saleItem = req.body;
        console.log(saleItem);

        const updateDoc = {
            $set: saleItem,
        };
        const stockData = await SaleItemkModel.updateOne(filter, updateDoc, options);
        return res.status(200).json({
            success: true,
            message: "Item updated successfully",
            data: stockData,
        })
    } catch (error) {
        return next(error.message);
    }

}