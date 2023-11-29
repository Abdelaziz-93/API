const express = require('express')
const {newCar,updateCar,deleteCar,getCars,getCarById } = require('../controllers/carControllers')
const {uploadMultply} = require('../utils/multerMiddliwar')
const route = express.Router()

route.post('/newCar',uploadMultply,newCar)
route.put('/updateCar/:id',uploadMultply,updateCar)
route.delete('/deleteCar/:id',deleteCar)
route.get('/getCars',getCars)
route.get('/getCar/:id',getCarById)


module.exports=route