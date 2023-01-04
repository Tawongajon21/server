const mongoose= require('mongoose');
const ProductsSchema= new mongoose.Schema({
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
        required:true
    },
    quantityBought:{
        type:Number,
        required:true,
       
    },

    quantitiesSold:{
        type:Number,
        required:true,
    },
    unitPrice:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    sellingPrice:{
        type:Number,
        required:true
    },
   
    stockLeft:{
        type:Number,
        required:true
    },

valueOfStockLeft:{
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



        const Products= mongoose.model("Products",ProductsSchema);

        module.exports=Products;