const mongoose= require('mongoose');
const SalesSchema= new mongoose.Schema({
   productName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:70,
        
    },
    storeName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:70,
        
    },
    username:{
        type:String,
        required:true,
        minLength:3,
        maxLength:70,
        
    },
    
   dimension:{
        type:String,
        required:true,
        minLength:3,
        maxLength:70,
        
    },

    unitPrice:{
        type:Number,
        required:true,
       
    },

    quantitiesSold:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true,
        value:["ZWL","USD","RANDS","PULA","Great Britain Pound"]
    },
    paymentMethod:{
        type:String,
        required:true,
        value:["Ecocash","ZIPIT","Cash","Onemoney"]
    },

    
    
    createdBy:{
        type:String,
        required:true,
        } 
 
}
,{
    timestamps:true
}
)



        const Sales= mongoose.model("Sales",SalesSchema);

        module.exports=Sales;