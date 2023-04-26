const mongoose=require('mongoose');

const UserContact=new mongoose.Schema({
    name:{
        type:String,
        required: true
       
    },
    email:{
        type:String,
        required: true
       
    },
    subject:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
        
    }
})

const UserContactForm=mongoose.model('Contact',UserContact);

module.exports=UserContactForm;
