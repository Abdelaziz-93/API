const express = require('express')
const {newOrder,updateOrder,deleteOrder,getOrder}=require('../controllers/orderControllers')
//const {uploadMultply}=require('../utils/multerMiddliwar')
const route = express.Router()


route.post('/newOrder',newOrder)
route.put('/updateOrder/:id',updateOrder)
route.delete('/deleteOrder/:id',deleteOrder)
route.get('/getOrder',getOrder)



module.exports=route;