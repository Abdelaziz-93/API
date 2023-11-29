const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{
        ref:'user',
        type: mongoose.Schema.Types.ObjectId
    },
    cars:[{
        carId:{
            ref:'car',
            type: mongoose.Schema.Types.ObjectId
        }
    }],

    marque:{
        type:String,
        required:true
    },

    quantite:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true,
    }
})

const ordre = mongoose.model('ordre',orderSchema)
module.exports=ordre;