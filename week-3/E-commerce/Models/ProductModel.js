import {Schema,model} from 'mongoose'
const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"product name price"]
    },brand:{
        type:String,
        required:[true,"product name brand"]
    }},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    }
)
export const productModel=model("product",productSchema)