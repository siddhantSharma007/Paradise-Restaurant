const jwt=require('jsonwebtoken');
const User=require("../model/UserSchema");

const Authenticate=async(req,res,next)=>{
    try
    {
        const token= req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        const rootUser=await User.findOne({id:verifyToken._id,"tokens:token":token});
        if(!rootUser){ throw new Error('user not found')}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser.id;

        next();

    } catch(err)
        {
            res.status.send('Unauthorized:No token provided');
            console.log(err);
        }
    

}
module.exports=Authenticate;