const mongoose = require('mongoose')


const orderScheme = new mongoose.Schema({

    totalItems:{
        type: Number,
    },
    totalPrice:{
        type: Number,
    },
    date: {
        type: Date,
    },
    mod_liv: {
        type: String,
    },
    mod_payement: {
        type: String,
    },
})

module.exports= Order = mongoose.model('orders', orderScheme)