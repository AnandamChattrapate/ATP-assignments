import {Schema,model} from 'mongoose'
// create user schema,
const UserCommentSchema=new Schema({
    user:{
        type:Schema.Type.ObjectId,
        ref:'user'
    }
    ,comment:{
        type:String,
        
    }
})
// create article schema
const articleSchema=new Schema({
    author:{
        type:Schema.Type.ObjectId,
        ref:'user',
        required:[true,"Author Id required "]
    },title:{
        type:String,
        required:[true,"title is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    content:{
        type:String,
        required:[true,"Content is required"]
    },comments:[UserCommentSchema],
    isActive:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true,
    strict:"throw",
    versionKey:false
})
export const ArticleModel=model("article",articleSchema)

