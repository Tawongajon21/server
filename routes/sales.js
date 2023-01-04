const express= require('express');

const { getSales, createSale, updateSale, deleteSale, getOperatorSales } = require('../controllers/sales');
const auth = require('../middleware/auth');



const salesRouter=express.Router();


salesRouter.get('/get-sales',auth,getSales);
salesRouter.get('/get-operator-sales',auth,getOperatorSales);
salesRouter.post('/add-sales',auth,createSale);
salesRouter.patch('/update-sale/:id',auth,updateSale);
salesRouter.delete('/delete-sale/:id',auth,deleteSale);





module.exports=salesRouter