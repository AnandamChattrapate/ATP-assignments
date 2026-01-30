import exp from 'express'
import { userApp} from './API/userApi.js'
import { productApp } from './API/productApi.js'

const app=exp()
// console.log(app)
let PORT=3000
app.listen(PORT,()=>console.log("server listening on port :",PORT))
// create users

// only post,put have body

// bodyparsing middle ware
app.use(exp.json())
app.use('/users-api',userApp)
app.use('/products-api',productApp)
// create user api (req handlers)
  // get req handling( read )// client
  
