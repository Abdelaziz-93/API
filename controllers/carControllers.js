const mongoose= require('mongoose')
const car = require('../Models/car')

const newCar = (req,res)=>{
    console.log(req.files)
    let images=[]
    for(let i=0;i<1;i++){
        images.push(req.files[i].originalname)
    }

    let newCAR=new car({
        marque:req.body.marque,
        color:req.body.color,
        status:req.body.status,
        price:req.body.price,
        description:req.body.description,
        image:images

    })

    newCAR.save()
    res.json(newCAR)
}

const updateCar =async (req,res)=>{
   let id=req.params.id
   console.log(id)
    const carExist = await car.findOne({
        _id : id
    })
    console.log(carExist)
    let images=[]
    for(let i=0;i<1;i++){
        images.push(req.files.originalname)
    }   console.log(req.body.marque)
        carExist.marque=req.body.marque
        carExist.status=req.body.status
        carExist.color=req.body.color
        carExist.image=images
        carExist.price=req.body.price
        carExist.description=req.body.description
    carExist.save()
 res.json(carExist)
}

const deleteCar =(req,res)=>{
    car.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json({
                message: "car deleted!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getCars = async(req,res)=>{
    let Cars =await car.find()
    res.json(Cars)
}

const getCarById = async(req,res)=>{
    let cars =await car.findById({ _id: new mongoose.Types.ObjectId(req.params.id)})
    res.json(cars)

}


module.exports={newCar,updateCar,deleteCar,getCars,getCarById }