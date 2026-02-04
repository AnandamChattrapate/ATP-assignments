import {Schema,model} from model
const UserSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"required first name"]
    },
    lastName:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"required password"]
    },
    email:{
        type:String,
        required:[true,"required Email"]
    },
    profileImageUrl:{
        type:String,
    },
    role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],
        required:[true,"{Value} Invalid Role"]
    },

    isActive: {
    type:Boolean,
    default:true
}},{
    timestamps:true,
    strict:"throw",
    versionkey:false
})
export const UserTypeModel=model("user",UserSchema)