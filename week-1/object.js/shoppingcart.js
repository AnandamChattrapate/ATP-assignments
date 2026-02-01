// 1 : You are building a shopping cart summary for an e-commerce website.

let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products
inStock=cart.filter(e => e.inStock)
console.log(inStock)
// Use map() to create a new array with:  { name, totalPrice }
let n=cart.map(e => { 
    return {
    name:e.name,
    totalPrice:e.price}
})
console.log("new name, total price : ",n)
// Use reduce() to calculate grand total cart value
let grandTotal=cart.reduce((acc,ele) => {
    if (typeof acc==='object' && acc.inStock){
        return (acc.price * acc.quantity)+(ele.price*ele.quantity)
    }
    else if (ele.inStock){
        return acc+ele.price*ele.quantity
    }return acc
})
console.log("grand total : ",grandTotal)
// Use find() to get details of "Mouse"
console.log(cart.find(e => e.name=="Mouse"))
// Use findIndex() to find the position of "Keyboard"
console.log(cart.findIndex(e => e.name=='Keyboard'))
