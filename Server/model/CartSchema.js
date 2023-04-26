const mongoose=require('mongoose');


const UserCart=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    url:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
   
})

const UserFoodCart=mongoose.model('cart',UserCart);

module.exports=UserFoodCart;