const mongoose = require('mongoose')


const orderScheme = new mongoose.Schema({
    description: {
        type: String,
    },
    product:{
        type: String,
    },
    date: {
        type: String,
    },
    mod_liv: {
        type: String
    }
})

module.exports= Order = mongoose.model('orders', orderScheme)