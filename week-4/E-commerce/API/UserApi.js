import express from 'express'
const userApp = express.Router()
import {userModel} from  '../Models/UserModel.js'
import { verifyToken } from '../Middleware/verifyToken.js'
import bcrypt,{ hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { productModel } from '../Models/ProductModel.js'
dotenv.config()

// create user
userApp.post('/users',async(req,res)=>{
    try{
        // hash the user input password
        let hashedPassword= await hash(req.body.password,10);
        req.body.password=hashedPassword;
        
        // create the new user
        let status = await userModel.create(req.body);
        if (!status){
            return res.status(400).json("unable to create the user")
        }
        return res.status(200).json({message:"user created successfully",payload:status})


    }catch(err){
       return res.status(400).json({message:err.message+err,})
    }
})
// login user
userApp.post('/auth',async (req,res)=>{
    // finding user by email as has unique
    console.log(req.body)
    const {email}=req.body;
    let userObj=await userModel.findOne({email})
    if (!userObj){
        return res.status(400).json({message:"user mail not exists"})
    } 

    // plain text from user input 
    let password=req.body.password;

    // verify password in DB (hashed password)
    let status=await compare(password,userObj.password);
    if(status==false){
        return res.status(401).json({message:"Invalid Password"})
    }
    // create token 
    let signedToken=jwt.sign(
        {name:req.body.name},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    )
    
    // send response as cookie to client
    res.cookie(
        'token', // cookie-name
        signedToken,
        {httpOnly:true,secure:false,sameSite:"lax"}
    )
    return res.status(200).json({ message: "Login successful" })


})
// add product to user's cart
// userApp.put('/user-cart/user-id/:uid/product-id/:pid', async(req,res)=>{
//     try{
//         // De Structing 
//         let {uid,pid}=req.params;
//         //perform update
//         let user=await userModel.findById(uid)
//         if(!user){
//             return res.status(400).json({message:"user not found "})
//         }
//         console.log(user)
//         let product=await productModel.findById(pid)
//         if (!product){
//             return res.status(400).json({message:"product not found "})
//         }
//         console.log(product)

//         let modifiedUser=await userModel.findByIdAndUpdate(uid,
//             {$push:{cart:{product:pid}}},
//             {new:true})//.populate("cart.product")

//         // const addedProduct=await userModel.findByIdAndUpdate({uId},{},)
//         return res.status(200).json({message:"Product added to cart",payload:modifiedUser})
//     }catch(err){
//         return res.status(400).json({message:err.message})
//     }
// })

userApp.get('/users/:uid', async(req,res)=>{
    try{
        let {uid}=req.params
        let userObj=await userModel.findById(uid).populate("cart.product","productName price brand")
        if(!userObj){
            return res.status(400).json({message:"user not found"})
        }
        return res.status(200).json({messages:"user products",payload:userObj})
    }catch(err){
        return res.status(400).json({message:err.message})
    } 
})

userApp.put('/user-cart/user-id/:uid/product-id/:pid', async(req,res)=>{
    try{
        // De Structuring 
        let {uid,pid}=req.params;
        //perform update
        let user=await userModel.findById(uid)
        if(!user){
            return res.status(400).json({message:"user not found "})
        }
        console.log(user)
        let product=await productModel.findById(pid)
        if (!product){
            return res.status(400).json({message:"product not found "})
        }
        console.log(product)
        // find in user cart
        console.log('user object :' ,user,"-----------")
        let existsInUserCart=user.cart.find(e=> e.product==pid)

        console.log("status : ",existsInUserCart) 
        let Cart=user.cart;
        if(existsInUserCart){
            console.log("cart : ",Cart)
            for (let v of Cart){
                if (v.product==existsInUserCart.product){
                    v.quantity+=1;
                    break;
                }
            }
            let updatedUserCart= await userModel.findByIdAndUpdate(uid,
                {$set:{cart:Cart}},{new:true}
            )
            // let UpdatedProduct=await userModel.updateOne(uid,{$set:{"cart.${product}":pid:{existsInUserCart.quantity+1}}}})
            return res.status(200).json({message:"Product added to cart",payload:updatedUserCart})

        }else{
            // if product not exists in user cart
            let modifiedUser=await userModel.findByIdAndUpdate(uid,
            {$push:{cart:{product:pid}}},
            {new:true})//.populate("cart.product")
            return res.status(200).json({message:"Product added to cart",payload:modifiedUser})

        }
        

        // const addedProduct=await userModel.findByIdAndUpdate({uId},{},)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
})


export default userApp
