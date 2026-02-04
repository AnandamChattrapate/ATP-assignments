import express from 'express'
import {productModel} from '../Models/ProductModel.js'
export const productApp = express.Router()

// create product
productApp.post('/products',async (req,res)=>{
    try{
        let productDocument=await productModel.create(req.body)
        if (!productDocument){
            return res.status(400).json({message:"error in creating model"})

        }
        console.log("product created successfully")
        res.status(201).json({message:"product created",payload:productDocument})

    }catch(err){
        return res.status(400).json({message :"error in creating product"})
    }
})



export default productApp
