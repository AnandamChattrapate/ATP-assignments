import {Schema,model} from 'mongoose'

const ProductSchema=new Schema({
    id:{
        type:Number,
        required:[true,"product id required "],
    },
    brand:{
        type:String,
        required:[true," product brand required "],
    },
    name:{
        type:String,
        required:[true," product name required "],
    },price:{
        type:Number,
        required:[true,"Age is required"],
    }
})

export const ProductModel=model("Product",ProductSchema);
