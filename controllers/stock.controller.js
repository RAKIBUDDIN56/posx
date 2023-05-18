const StockModel = require('./../models/stock.model')

exports.addStock = async (req, res, next) => {

    console.log(req.body);
    try {
        const stock = new StockModel(req.body);
        stock.save().then((results) => {
            console.log(results);
           
            return res.status(200).json({
                success: true,
                message: "Stock added successfully",
                data: results,
            });

        }).catch((e) => {
            return next(e);
            });

    } catch (err) {
        return next(err.message);
    }


}
exports.fetchAllStocks = async (req, res, next) => {
    try {
        const stockData = await StockModel.find({},{_id:0,__v:0,createdOn:0,updatedOn:0});
        return res.status(200).json({
            success: true,
            message: "Data fatch successfully",
            data: stockData,
        })
    } catch (err) {
        return next(err.message);
    }

}
exports.updateStock = async (req, res) => {
    const stockId = req.params.id;

    try {
        // create a filter for a movie to update
        const filter = { _id: stockId };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const stock = StockModel(req.body);
        console.log(stock);

        const updateDoc = {
            $set: stock,
        };
        const stockData = await StockModel.updateOne(filter, updateDoc, options);
        return res.json({ "success": true, "stocks": stockData })
    } catch (error) {
        return res.json({ "success": false, "message": error })

    }

}