// product API
import express from 'express'
import {ObjectId} from 'mongoose'
import mg from 'mongoose'
export const ProductApp=express.Router();
import {ProductModel} from '../models/ProductModel.js'
// product properties
        // id 
        // brand
        // name
        // price

// GET  /products
ProductApp.get('/products',async (req,res)=>{
     const Allproducts= await ProductModel.find();
    res.status(200).json({message:"All products",payload:Allproducts})
})

// POST /products
ProductApp.post('/products',async (req,res)=>{
    try{
    const upprod =await  ProductModel.create(req.body) 
    return res.status(200).json({message:"new  products added successfully ",payload:upprod})
    }
    catch(err){
        res.status(404).json({message:err})
    }
})

// GET /products/id
ProductApp.get('/products/:id',async (req,res)=>{
    try{    
    const Id=req.params.id
    // testing Id
    console.log(Id)
    // validating Id
    if (!mg.Types.ObjectId.isValid(Id)) {
      return res.status(400).json({ message: "Invalid product ID" })
    }
    // finding Product by Id
    let product=await ProductModel.findById(Id)
    // If not found 
    if(!product){
        return res.status(400).json({message:"product not found "})
    }
    // If product found 
     res.status(200).json({message:"product with ID",payload:product})
    }catch(err){
        console.log(err);
        res.status(400).json({message:err.message})
    }
})

// PUT /products/id
ProductApp.put('/products/:id',async (req,res)=>{
    try{
    let productId=req.params.id
    let updateData=req.body;
    console.log(updateData)
    let updatedProduct=await ProductModel.findByIdAndUpdate(productId
        ,{$set : updateData}, // fields to update 
        {new:true}        // return updated document
    )
    if (!updatedProduct){
        res.status(400).json({message:"cant update the product with Id"})
    }
    return res.status(200).json({message:"product updated successfully",payload:updatedProduct})
    }catch(err){
        return res.status(400).json({message:"error in updating product",error:err})

    }
})


