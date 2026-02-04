import {Schema,model} from 'mongoose'
import { productModel } from './ProductModel.js'
import mongoose from 'mongoose'
// create carts schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
        required:[true,"product id required"]
    },
    quantity:{
        type:Number,
        required:[true,"product quantity required"],
        min:[1,"quantity must be at least 1"],
        default:1
    }
})
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name required"]
    },email:{
        type:String,
        required:[true,"email required"],
        unique:true
    },password:{
        type:String,
        required:[true,"password required"],
        // pattern 
    },
    cart:{
        type:[cartSchema]
    }
})
export const userModel=model("user",userSchema)