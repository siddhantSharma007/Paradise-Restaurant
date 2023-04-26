const mongoose=require('mongoose');
const Db=process.env.DATABASE;

mongoose.connect(Db).then(()=>{
    useNewUrlParser: true
    console.log(`connection Successful`);
}).catch((err)=>console.log(err));
