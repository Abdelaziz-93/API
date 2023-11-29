
const mongoose=require('mongoose')
const Order = require('../Models/ordre')

const newOrder = (req,res)=>{
   
    let ordre = new Order({
        userId:req.body.userId,
        cars:req.body.cars,
        marque:req.body.marque,
        price:req.body.price,
        quantite:req.body.quantite
    }) 

    ordre.save()
    res.json(ordre)
}

const updateOrder=async(req,res)=>{
    let id =req.params.id
    let findOrder= await Order.findOne({
      _id: id

    });
    console.log(findOrder)
    
    findOrder.quantite=req.body.quantite
    findOrder.marque=req.body.marque
    findOrder.price=req.body.price
    
    
    
    findOrder.save();
     res.json(findOrder);

   
}
const deleteOrder =(req,res)=>{
    Order.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Order deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}

const getOrder =async(req,res)=>{
    let Orders =await Order.find()
    res.json(Orders)
}


module.exports={newOrder,updateOrder,deleteOrder,getOrder}