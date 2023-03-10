const express= require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const productRouter=express.Router();
const auth= require('../middleware/auth');

productRouter.get('/get-products',auth,getProducts);
productRouter.get('/get-product/:id',auth,getProduct);
productRouter.post('/create-product',auth,createProduct);
productRouter.patch('/update-product/:id',auth,updateProduct);
productRouter.delete('/delete-product/:id',auth,deleteProduct);

module.exports= productRouter;