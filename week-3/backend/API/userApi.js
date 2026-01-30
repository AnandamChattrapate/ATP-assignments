import express from 'express';
// mini-router
export const userApp=express.Router();
// to store all users
let users=[];

// send users 
userApp.get('/users',(req,res)=>{
    // 200 - successful completion // default
    res.status(200).json({message:"All users",payload:users})
})

// post req handler
// getting data from the client 
userApp.post('/users',(req,res)=>{
let newUser=req.body;
users.push(newUser)
console.log(newUser);
    res.status(201).json({message:"user created users",payload:users})
  }) 
  
// create user 
// put req handler  update user
userApp.put('/users',(req,res)=>{
// get user id from request body
let userId = req.body.id;
// find user by id 
let userExists = users.find(user=>user.id==userId);
if (!userExists){
return res.status(404).json({message:"user not found"});
}
let Id=req.body.id
let name=req.body.name
let age=req.body.age
if(name) userExists.name=name
if(age) userExists.age=age
if(Id) userExists.id=Id
console.log("updated user data : ", userExists);
res.status(200).json({message:"user updated", payload:userExists});
})
//  delete user by id
userApp.delete('/users/:id',(req,res)=>{
// read id from url 
let Id = Number(req.params.id);
let userIndex = users.findIndex(userObj => userObj.id == Id);
if(userIndex == -1){
  return res.status(404).json({message:"user not found"});
}

let deletedUser = users.splice(userIndex,1)[0];
console.log("current users:", users);
res.status(200).json({message:"user deleted", payload:deletedUser});
})
