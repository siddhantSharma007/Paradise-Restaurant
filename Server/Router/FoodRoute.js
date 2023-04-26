const express=require('express');
const router=express.Router();
const UserFoodCart=require('../model/CartSchema');


router.get('/getAllFood',async(req,res)=>{
    try{
        const foods=await UserFoodCart.find({})
        res.send(foods)
    } catch(error){
        return res.status(400).json({message:error});
    }
});

module.exports=router;