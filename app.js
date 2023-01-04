

const express= require('express');
const app= express();
const cors= require('cors');

const connectDb = require('./db/connectDb');
const dotenv= require('dotenv');
const authRouter = require('./routes/auth');
const salesRouter = require('./routes/sales');
const productRouter = require('./routes/products');
dotenv.config();
const port=process.env.Port|| 5000;

//middleware
app.use(cors());
app.use(express.json());

//routes 
app.use('/api/v1/',authRouter);
app.use('/api/v1/',salesRouter);
app.use('/api/v1/',productRouter);

//db 

const start= async()=>{
    try {
        await connectDb(process.env.ConnectionString);
        //Start the Server
app.listen(port,(req,res)=>{
    console.log(`Server is Running at Server ${port} connected to the db`)
    })
    
    } catch (error) {
        console.log(error)
        //res.send(error)
    }
}
start()





