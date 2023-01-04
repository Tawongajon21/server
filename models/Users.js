const mongoose= require('mongoose');
const UserSchema= new mongoose.Schema({
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
    phoneNumber:{
        type:String,
        required:true,
       
    },
    isAdmin:{
        type:Boolean,
        default:true
       
    },

    storeName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    id:{type:String}
}
,{
    timestamps:true
}
)



        const User= mongoose.model("UserSchema",UserSchema);

        module.exports=User;