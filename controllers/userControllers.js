const User=require('../Models/user')
const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const createUser=(req,res)=>{
    const PasswordHache = bcrypt.hashSync(req.body.password, 8);
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:PasswordHache
    })
    newUser.save().then(result => {
        res.json('user created successfully!')
    }).catch(error=>{
        res.json('error!')

    })
}

const loginUser = async(req,res)=>{
    const userExists = User.findOne({
        email : req.body.email
    }).then(user=>{
        const comparePassword = bcrypt.compareSync(req.body.password, user.password)
        if(!comparePassword){
            res.status(404).json({error: "wrong password!"})
        } 
        const token = jwt.sign({ user: user }, 'secret-key');
        res.status(200).json({message : "logged in successfully",token:token})
    })
    
    
    }

    const UpdateUser = async(req,res)=>{
        id=req.body.id
        const userExists = await User.findOne({
            _id : id
        })
            const PasswordHache = bcrypt.hashSync(req.body.password, 8);
            userExists.email=req.body.email
            userExists.name=req.body.name
            userExists.password=PasswordHache
        userExists.save()
     res.json(userExists)
    }

    const deleteUser=(req,res)=>{
        User.deleteOne({ _id: new mongoose.Types.ObjectId(req.body.id)})
        .then(result => {
            res.status(200).json({
                message: "User deleted!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
        
    }

module.exports={
    createUser,
    loginUser,
    UpdateUser,
    deleteUser
}