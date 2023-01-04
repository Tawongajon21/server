const User= require("../models/Users");
const bcrypt= require('bcryptjs');
const generateToken= require('../middleware/generateToken');
const Operator = require("../models/Operator");
const Register=async(req,res)=>{
   
    let errors=[];
User.findOne({email:req.body.email}).then(user=>{
    if (user) {
        errors.push(
            {
                msg:"Email Already Exists"
            }
            
        )
        res.status(401).send({message:" Email Already Exists"})
    }
    else{
        const user=new  User({
        
            name:req.body.name,
            phoneNumber:req.body.phoneNumber,
            storeName:req.body.storeName,
            email:req.body.email,
           
          
          
              password:bcrypt.hashSync(req.body.password,8),
              
            },
             
     
    
    )
    const createdUser=  user.save();



    res.send({
        _id:user._id,
        name:user.name,
        phoneNumber:user.phoneNumber,
        storeName:user.storeName,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(createdUser)
    })
   

    }

    
})
   



}
const Login=async(req,res)=>{
    
    const user= await User.findOne({email:req.body.email});
  

    if (user) {
        if (bcrypt.compareSync(req.body.password,user.password)) {
            res.send({
                _id:user._id,
                name:user.name,
                storeName:user.storeName,
                phoneNumber:user.phoneNumber,
                email:user.email,
                isAdmin:user.isAdmin,
               
             
               
             
              
                
                token:generateToken(user)
            })
            return 
        }
    }
    res.status(401).send({message:"invalid email or password"})
    }

    const userDetails=async(req,res)=>{
    
        const user=await User.findById(req.params.id);
        if (user) {
            res.send(user)
        }
        else{
            res.status(404).send('user not found')
        }
    }


    const registerOperator=async(req,res)=>{
       // req.body.addedBy=req.user.userId;
        
        const user=await  Operator({
            
            name:req.body.name,
            phoneNumber:req.body.phoneNumber,
            
            email:req.body.email,
            storeName:req.body.storeName,
          
              password:bcrypt.hashSync(req.body.password,8),
            
              addedBy:req.body.addedBy
              
            },
             
     
    
    )
    const createdUser=  user.save();



    res.send({
        _id:user._id,
        name:user.name,
        phoneNumber:user.phoneNumber,
        storeName:user.storeName,
       
        email:user.email,
        addedBy:user.addedBy,
        
        token:generateToken(createdUser)
    })

    }
  
    
    


    const loginOperator=async(req,res)=>{
    
        const user= await Operator.findOne({email:req.body.email});
    
    
        if (user) {
            if (bcrypt.compareSync(req.body.password,user.password)) {
                res.send({
                    _id:user._id,
                    name:user.name,
                    
                    phoneNumber:user.phoneNumber,
                    storeName:user.storeName,
                    email:user.email,
                   
                 
                   
                 
                  
                    
                    token:generateToken(user)
                })
                return 
            }
        }
        res.status(401).send({message:"invalid email or password"})
        }
const getOperators=async(req,res)=>{
    const adminId=req.user.userId;
    const data=await Operator.find()
    if(!data){
        res.status(200).json({msg:"You Have Not Added Any Operators  Yet"})
          }
          else{
            res.status(200).send(data)
          }
}
const getOperator=async(req,res)=>{
    const adminId=req.user.userId;
    const id= req.params.id
    const data=await Operator.findById(id)
    if(!data){
        res.status(200).json({msg:"You Have Not Added Any Operators  Yet"})
          }
          else{
            res.status(200).send({
                _id:data._id,
                name:data.name,
                
                phoneNumber:data.phoneNumber,
                email:data.email,
               
            }
            )
          }
}
const deleteOperator=async(req,res)=>{
    const id= req.params.id;
    const data = await Operator.findByIdAndDelete(id)
    res.json({msg:' PlantSales Deleted Succesfully'});
}

    module.exports={Register,Login,userDetails,registerOperator,loginOperator,getOperators,getOperator,deleteOperator}