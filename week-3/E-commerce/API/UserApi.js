import express from 'express'
const userApp = express.Router()
import {userModel} from  '../Models/UserModel.js'

// create user
userApp.post('/users',async(req,res)=>{
    try{
        let status = await userModel.create(req.body);
        if (!status){
            res.status(400).json("unable to create the user")
        }
        return res.status(400).json({message:"user created successfully",payload:status})


    }catch(err){
       return res.status(400).json({message:err.message,})
    }
})
// add product to user's cart
userApp.put('/user-id/:uid/product-id/:pid', async(req,res)=>{
    try{
        // Add your logic here to add product to user's cart
        res.status(200).json({message:"Product added to cart"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
})


export default userApp
