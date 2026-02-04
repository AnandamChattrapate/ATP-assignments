import exp from 'express'
import {UserApp} from './API/UserApi.js'
import {connect} from 'mongoose'
import { ProductApp } from './API/ProductApi.js'
import cookieParser from 'cookie-parser'
const PORT=4000


async function connectDB(){
  try{
  await connect('mongodb://localhost:27017/mydb')
  const app=exp()
  app.use(exp.json())
  app.use(cookieParser())
  console.log("db connection successful")
  app.use('/users-api',UserApp)
  app.use('/product-api',ProductApp)
    app.listen(4000,()=>console.log("server listening on port :",PORT))

  }catch(err){
    console.log("error in seeting up db connection ",err.message)
    
  }

}
// app.use(exp.json())
connectDB()




  
