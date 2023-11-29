const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    marque:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['new','occasion']
    },
    image:[{
        type: String,
        required : true, 
    } ]

})


const car=mongoose.model('car',carSchema)
module.exports=car;