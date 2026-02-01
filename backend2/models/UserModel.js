import { Schema,model } from "mongoose";
const UserSchema=new Schema({
    username:{
        type:String,
        required:[true,"User name is required"],
        minLength:[4,"min len should be 4"],
        maxLength:[6,"max len exceeded"]

    },
    password:{
        type:String,
        required:[true,"password is required "]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"age should be above 18"],
        max:[25,"age should be less than 25"],
    }
})
export const UserModel=model("user",UserSchema)