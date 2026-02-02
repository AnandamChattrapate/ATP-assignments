import {Schema,model} from 'mongoose'
import { productModel } from './ProductModel.js'
// create carts schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'
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