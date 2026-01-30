import exp from 'express'
// mini-router
export const productApp=exp.Router()
// to store products temporarily
let products=[];

// sending  all products to client
productApp.get('/products',(req,res)=>{
res.status(200).json({message:"All products data",payload:products})
})

//get product using id
productApp.get('/products/product-id/:id',(req,res)=>{
let Id=Number(req.params.id)
// find that product if exists
let product=products.find(e=>e.id===Id)
if(!product) return res.status(404).json({message:"Product Not Found"})
else res.status(200).json({message:"Prouduct Found",payload:product})
})

//get product using brand
productApp.get('/products/product-brand/:brand',(req,res)=>{
let brand=req.params.brand
// get product by brand if exists
let product=products.find(e=>e.brand===brand)
if(!product) return res.status(404).json({message:"Product Not Found"})
else res.status(200).json({message:"Product Found",payload:product})
})

//create a new product
productApp.post('/products',(req,res)=>{
let newProduct=req.body

products.push(newProduct)
res.json({message:"Added new Product",payload:products})
})
// update a product by id
productApp.put('/products/:id',(req,res)=>{
let Id=Number(req.params.id)
let newProduct=req.body
let productIndex=products.findIndex(e=>e.productId=Id)
if(productIndex==-1) return res.status(404).json({message:"product not found"})

let deletedProduct=products.splice(productIndex,1,newProduct)
res.status(201).json({message:"product updated ",payload:products})

})
// delete a product by id
productApp.delete('/products/:id',(req,res)=>{
let id=Number(req.params.id)
let productIndex=products.findIndex(e=>e.productId=id)
if(productIndex==-1) return res.status(404).json({message:"product not found"})

let deletedProduct=products.splice(productIndex,1)
res.status(201).json({message:"product deleted",payload:deletedProduct})
})