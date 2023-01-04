const express= require('express');
const { Register, Login, userDetails, registerOperator, loginOperator, getOperators, getOperator, deleteOperator } = require('../controllers/auth');
const auth = require('../middleware/auth');



const authRouter=express.Router();


authRouter.post('/register',Register);
authRouter.post('/login',Login);
authRouter.post('/register-operator',auth,registerOperator);
authRouter.post('/login-operator',loginOperator);

authRouter.get('/me/:id',auth,userDetails);
authRouter.get('/operators',auth,getOperators);
authRouter.get('/operator/:id',auth,getOperator);
authRouter.delete('/delete-operator/:id',auth,deleteOperator);





module.exports=authRouter