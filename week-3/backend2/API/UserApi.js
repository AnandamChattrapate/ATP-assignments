import exp from 'express'
export const UserApp=exp.Router()
import {UserModel} from "../models/UserModel.js"
import bcrypt,{hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifyToken.js';

// user object properties
    // username
    //password
    //age


// Get All users
UserApp.get('/users',async (req,res)=>{
  try{
    // fetching All users from DB
    const Users=await UserModel.find({},{username:1,_id:0,age:1,password:0})
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
UserApp.post('/users', async (req, res) => {
  try {
    

    // Hash the password
    let hashedPassword = await hash(req.body.password, 10);
    req.body.password = hashedPassword;

    // Create the new user
    let newUser = await UserModel.create(req.body);
    return res.status(201).json({ message: "User created successfully", payload: newUser });
  } catch (err) {
    res.status(400).json({ message: "Error creating user", error: err.message });
  }
});
// user authentication route
UserApp.post('/auth',async (req,res)=>{
  try{
    // get user cred obj (user input)
    let userCred=req.body;
    let userOfDB=await UserModel.findOne({username:userCred.username})
    if(userOfDB===null){
      return res.status(404).json({message:"invalid Username"})
    }
    
    // Compare the plain text password with the hashed password stored in DB
                                    // input      ====       // DB
    let status=await compare(String(userCred.password), userOfDB.password)
    if (status===false){
      return res.status(401).json({message:"invalid Password"})
    }
    
    let signedToken=jwt.sign(
      {username:userCred.username},
      'abcdef',
      {expiresIn:"1h"}
    )
    res.cookie(
      'token',
      signedToken,
      {httpOnly:true,secure:false,sameSite:"lax"}
    )
    res.status(200).json({message:"login success ",token:signedToken})
  }catch(err){
    res.status(400).json({message:"Authentication error",error:err.message})
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

UserApp.get('/test',verifyToken,(req,res)=>{
  // token verification logic 
  // 1 get token from req
  res.status(200).json({message:"test route"})

})

