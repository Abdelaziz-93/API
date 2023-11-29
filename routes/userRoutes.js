const express=require('express')
const {createUser,loginUser,UpdateUser,deleteUser}=require('../controllers/userControllers')
const route=express.Router()

route.post('/signup',createUser)
route.post('/login',loginUser)
route.put('/updateUser',UpdateUser)
route.delete('/delete',deleteUser)

module.exports=route;