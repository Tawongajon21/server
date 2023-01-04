const mongoose= require('mongoose');
const OperatorSchema= new mongoose.Schema({
   name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:70,
        
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    storeName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
       
    },
    isAdmin:{
        type:Boolean,
        default:false
       
    },

 
    password:{
        type:String,
        required:true
    },
    id:{type:String},
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:"UserSchema",
        required:true
    }
}
,{
    timestamps:true
}
)



        const Operator= mongoose.model("OperatorSchema",OperatorSchema);

        module.exports=Operator;