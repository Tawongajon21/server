const Sales= require('../models/Sales');

const createSale=async(req,res)=>{
    


    try {
        const sale=await Sales.create({
            productName:req.body.productName,
            username:req.body.username,
            storeName:req.body.storeName,
            dimension:req.body.dimension,
            unitPrice:req.body.unitPrice,
            quantitiesSold:req.body.quantitiesSold,
            
            totalPrice:req.body.totalPrice,
            sellingPriceZwl:req.body.sellingPriceZwl,
            currency:req.body.currency,
            paymentMethod:req.body.paymentMethod,
            
            
            
     
            
            
            createdBy:req.body.createdBy
           
           

        })
      //  res.status(201).json({msg:"Message Created Succesfully",body,users:req.body.userId})
        res.status(201).json({msg:" Sale Created Succesfully",sale})
    } catch (error) {
        throw error
    }
}


const updateSale=async(req,res)=>{
    const id= req.params.id;
    const sale= await Sales.findById(id);

    if (sale) {
        
    
        
        sale.productName= req.body.productName||sale.productName;
        sale.username= req.body.username||sale.username;
        sale.storeName= req.body.storeName||sale.storeName;
        sale.dimension= req.body.dimension||sale.dimension;
        sale.unitPrice= req.body.unitPrice||sale.unitPrice;
        sale.quantitiesSold= req.body.quantitiesSold||sale.quantitiesSold;
       
        sale.totalPrice= req.body.totalPrice||sale.totalPrice;
        sale.sellingPriceZwl= req.body.sellingPriceZwl||sale.sellingPriceZwl;
        sale.currency= req.body.currency||sale.currency;
        sale.paymentMethod= req.body.paymentMethod||sale.paymentMethod;
       // livestocksale.plantName= req.body.plantName||plantsale.plantName;
       
   
      
       
      
       const updatedsale= await sale.save();
      
       res.status(201).
       json({
        productName: updatedsale.productName,
        dimension: updatedsale.dimension,
      unitPrice:updatedsale.unitPrice,
       quantitiesSold:updatedsale.quantitiesSold,
        unitPrice:updatedsale.unitPrice,
        totalPrice:updatedsale.totalPrice,
        currency:updatedsale.currency,
        paymentMethod:updatedsale.paymentMethod,
      
        
    }); 
     
    } 


  
//res.status(201).json({msg:'intangible Edited Succesfully',intangible})
}



const getSales=async(req,res)=>{
    
   
    const data= await  Sales.find();
    if(!data){
  res.status(200).json({msg:"You Have Not Added Sales Yet"})
    }
    else{
      res.status(200).send(data)
    }
}

const deleteSale=async(req,res)=>{
    const id= req.params.id;
    const sale= await Sales.findByIdAndDelete(id)
    res.json({msg:' PlantSales Deleted Succesfully'});
}
const getOperatorSales =async (req,res)=>{
      
    const data= await  Sales.find();
    if(!data){
  res.status(200).json({msg:"You Have Not Added Sales Yet"})
    }
    else{
      res.status(200).send(data)
    }
}

module.exports={createSale,updateSale,getSales,deleteSale,getOperatorSales};