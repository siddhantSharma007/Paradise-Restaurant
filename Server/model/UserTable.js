const mongoose=require('mongoose');


const UserBooking=new mongoose.Schema({
    name:{
        type:String,
        required: true
       
    },
    email:{
        type:String,
        required: true
       
    },
    phone:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    time:{
        type:String,
        required: true
        
    },
    persons:{
        type:String,
        required: true
        
    }
})

const UserTable=mongoose.model('Table',UserBooking);

module.exports=UserTable;