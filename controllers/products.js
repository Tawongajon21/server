const Product= require('../models/Products');

const createProduct=async(req,res)=>{
 


    try {
        const product=await Product.create({
            productName:req.body.productName,
            storeName:req.body.storeName,
            dimension:req.body.dimension,

            quantityBought:req.body.quantityBought,
            quantitiesSold:req.body.quantitiesSold,
            unitPrice:req.body.unitPrice,
            totalPrice:req.body.totalPrice,
            
            sellingPrice:req.body.sellingPrice,
            stockLeft:req.body.stockLeft,
            valueOfStockLeft:req.body.valueOfStockLeft,
            currency:req.body.currency,
            paymentMethod:req.body.paymentMethod,
            username:req.body.username,
     
            
            
            createdBy:req.body.createdBy
           
           

        })
      //  res.status(201).json({msg:"Message Created Succesfully",body,users:req.body.userId})
     
        res.status(201).json({msg:" Sale Created Succesfully",product})
    } catch (error) {
        throw error
    }
}


const updateProduct=async(req,res)=>{
    const id= req.params.id;
    const product= await Product.findById(id);

    if (product) {
        
    
   
        
        product.productName= req.body.productName||product.productName;
        product.storeName= req.body.storeName||product.storeName;
        product.dimension= req.body.dimension||product.dimension;
        product.quantityBought= req.body.quantityBought||product.quantityBought;
        product.quantitiesSold= req.body.quantitiesSold||product.quantitiesSold;
       
        product.unitPrice= req.body.unitPrice||product.unitPrice;
        product.totalPrice= req.body.totalPrice||product.totalPrice;
       
        product.sellingPrice= req.body.sellingPrice||product.sellingPrice;
        product.stockLeft= req.body.stockLeft||product.stockLeft;
        product.valueOfStockLeft= req.body.valueOfStockLeft||product.valueOfStockLeft;
        product.currency= req.body.currency||product.currency;
        product.paymentMethod= req.body.paymentMethod||product.paymentMethod;
       // livestocksale.plantName= req.body.plantName||plantsale.plantName;
       
   
      
       
      
       const updatedProduct= await product.save();
      
       res.status(201).
       json({
        productName: updatedProduct.productName,
        quantityBought:updatedProduct.quantityBought,
       quantitiesSold:updatedProduct.quantitiesSold,
      
       priceBought:updatedProduct.quantitySold,
       stockLeft:updatedProduct.stockLeft,
       valueOfStockLeft:updatedProduct.valueOfStockLeft,
      
        
    }); 
     
    } 


  
//res.status(201).json({msg:'intangible Edited Succesfully',intangible})
}



const getProducts=async(req,res)=>{
    
   
    const data= await  Product.find();
    if(!data){
  res.status(200).json({msg:"You Have Not Added Products Yet"})
    }
    else{
      res.status(200).send(data)
    }
}
const getProduct=async(req,res)=>{
    
    const data=await Product.findById(req.params.id)
   
    if(!data){
  res.status(200).json({msg:" Product Not Found Yet"})
    }
    else{
      res.status(200).send(data)
    }
}

const deleteProduct=async(req,res)=>{
    const id= req.params.id;
    const product= await Product.findByIdAndDelete(id)
    res.json({msg:' Product  Deleted Succesfully'});
}


module.exports={createProduct,updateProduct,getProducts,getProduct,deleteProduct};