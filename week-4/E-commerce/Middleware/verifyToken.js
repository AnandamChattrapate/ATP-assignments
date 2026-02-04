import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const verifyToken=(req,res,next)=>{
    // token verification 
    // 1   get token
    console.log(req.cookies)
    let signedToken=req.cookies?.token;
    if(!signedToken){
        return res.status(400).json({message:"unable to get the token from client "})
    }
    try{
    // verify token
    let decodedToken=jwt.verify(signedToken,process.env.JWT_SECRET)
    console.log("decoded Token : ",decodedToken);
    next()
    }catch(err){
        console.log(err.message);
        res.status(401).json({message:"error in middle ware"+err})
    }
}