const express = require('express');
const router = express.Router();
require('../Database/Database');
const bcrypt=require('bcrypt');
const rootUser=require('../MiddleWare/Authenticate')
const jwt=require('jsonwebtoken');
const User2=require('../model/UserTable');
const UserFoodCart=require('../model/CartSchema');
const UserContactForm=require('../model/userContact');
const Authenticate=require('../MiddleWare/Authenticate')

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});
  //Logout

router.get('/logout',(req,res)=>{
    console.log("hello logout");
    res.clearCookie('jwtToken',{path:'/'})
    res.status(200).json({message:'user Logout'});
})

router.get('/home',Authenticate,(req,res)=>{
    res.send(`hello from server`);
    req.send(req.rootUser);
});

     //Form (table) booking

     router.post('/booking',async (req, res) => {

        const {name,email,phone,date,time,persons} =req.body;
          
        if(!name || !email || !phone || !date || !time  || !persons)
        {
            return res.status(422).json({error:"All filled Required"});
        }
           try{
        const userExist1=await User2.findOne({email: email })
        if(userExist1) {
             return res.status(422).json({message:"booking already exist"});
           }
           else
           {
            const userbooking=new User2({name,email,phone,date,time,persons});
            await userbooking.save();
             res.status(201).json({message:'Booking Successfully'});
           }
          
        } catch(err)
        {
            console.log(err);
        }
    });

       /// contact Form

       router.post('/contact',async (req, res) => {

        const {name,email,subject,message} =req.body;
          
           try{
        const userExist2=await UserContactForm.findOne({email: email })
        if(userExist2) {
             return res.status(422).json({message:"Query already Submitted"});
           }
           else
           {
            const usercontact=new UserContactForm({name,email,subject,message});
            await usercontact.save();
             res.status(201).json({message:'Query Submitted Successfully'});
           }
          
        } catch(err)
        {
            console.log(err);
        }
    }); 


    //forgot


    

module.exports = router;