import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){

    // token verification
    // 1  get token from req object (using cookie-parser)
    console.log(req.cookies)
    let signedToken=req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"please login first"})

    }
    // verify token
    let decodedToken=jwt.verify(signedToken,"abcdef")
    console.log(decodedToken)
    next()
}