import express from 'express'
import { connect } from 'mongoose'
import {config} from 'dotenv'
config() // process.env
import { AuthorApp } from './APIs/AuthorApi.js'
import { UserApp } from './APIs/UserApi.js'
import { AdminApp } from './APIs/AdminApi.js'
const app=express()
app.use(express.json())
app.use('/user-api',UserApp);
app.use('/user-api',AuthorApp);
app.use('/user-api',AdminApp);


 // connect to DB
 const connectDB=async()=>{
    try{
        
        await connect(process.env.DB_URL)
        console.log("DB connection success ")
        app.listen(process.env.PORT,()=>console.log("server started at PORT",process.env.PORT))

    }catch(err){
        console.log(err.message)
    }


 }
 connectDB()
 // error handling middleware
 app.use((err,req,res,next)=>{
    console.log(err.message)
    res.json({message:err.message})
 })