import exp from 'express'
export const UserApp=exp.Router()
import {UserModel} from "../models/UserModel.js"

// user object properties
    // username
    //password
    //age


// Get All users
UserApp.get('/users',async (req,res)=>{
  try{
    // fetching All users from DB
    const Users=await UserModel.find()
    // if find fails
    if(!Users){
      return res.status(400).json({message:"Error in getting users form DB"})
    }
    // sending Users to Client
    return res.status(200).json({message:"users",payload:Users})
}catch(err){
  res.status(400).json({message:err.message})
}}
)


// get user by ID
UserApp.get('/users/:id',async (req,res)=>{
let objId=req.params.id;
let userObj= await UserModel.findById(objId)
res.status(200).json({message:"user",payload:userObj})
})


// add a new User 
UserApp.post('/users',async (req,res)=>{
  try{
    let newUser=await UserModel.create(req.body)
    return res.status(201).json({message:"user created successfully",payload:newUser})
  }catch(err){
    res.status(400).json({message:"error creating user",error:err.message})
  }
})


// update a user by ID
UserApp.put('/users/:id',async (req,res)=>{
  try{
    const UserId=req.params.id;
    const UpdateData=req.body;
    const UpdatedUser=await UserModel.findByIdAndUpdate(
      UserId,
      {$set :UpdateData},  // update user 
      {new:false} // to get deleted user data
    )
    if(!UpdatedUser){
      return res.status(400).json({message:"error in getting the user form DB"})
    }
    return res.status(201).json({message:"user updated successfully",payload:UpdatedUser})
  }catch(err){
    res.status(400).json({message:"error creating user",error:err.message})
  }
})


// delete a user by ID
UserApp.delete('/users/:id',async (req,res)=>{
  try{
  let objId=req.params.id
  let deletedUser=await UserModel.findByIdAndDelete(objId)
  if(!deletedUser){
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({message:"user removed",payload:deletedUser})
}catch(err){
  res.status(400).json({message:err.message})
}
})