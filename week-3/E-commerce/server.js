import express from 'express'
import {connect} from 'mongoose'
// import cookieParser from 'cookie-parser'
import ProductApi from './API/ProductApi.js'
import UserApi from './API/UserApi.js'


// connect to MongoDB 
async function connectDB(){
try{
   const status= await connect('mongodb://localhost:27017/ecomdb')
   if (!status){
    console.log('error in setting up connection with DB')
   }
   console.log("===DB connection success===")
   // create HTTP server
    const app=express()
    app.listen(3000)
    app.use(express.json())
    console.log("server listening at port 3000")
    app.use('/user-api',UserApi)
    app.use('/product-api',ProductApi)


}
catch(err){
    console.log("error :",err,err.message);
}}
connectDB()


//app.use(cookieParser())
// use body parser
// forward req to specific APIs
// Error handling middleware