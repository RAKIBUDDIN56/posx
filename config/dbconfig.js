const mongoose = require('mongoose')
require('dotenv').config();

try {
    const uri = process.env.ATLAS_URI
    mongoose.connect(uri, )

    const connection = mongoose.connection;

    mongoose.connection.once('open', () => {
        console.log('MongoDB connection estabilished successfully!!');
    })
} catch (error) {
    console.log("ERRR");
    console.log(error, 'error')
}

module.exports = mongoose.connection;