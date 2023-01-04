const dotenv=require('dotenv');
dotenv.config()
const jwt= require('jsonwebtoken');

const auth= async (req,res,next)=>{
   const authorization= req.headers.authorization;
   if (authorization) {
    const token=authorization.slice(7,authorization.length);
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
 if(err){
    res.status(401).send("Invalid Token")
 }
 else{
   console.log(decode);

    req.user= decode;
    console.log(req.user);
    next()
 }
    })
   }
   else{
    res.status(401).send("No Token")
   }
}

module.exports= auth;