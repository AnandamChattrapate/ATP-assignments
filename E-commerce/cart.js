import { getProductById, checkStock, reduceStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
// 1. Get product details
let p=getProductById(productId) // alternative
// 2. Check stock availability
if (checkStock(productId,quantity)){
    // 3. Check if product already in cart
//    - If yes, update quantity
//    - If no, add new item
    if (cartItems.find(e => e.id === productId)){
        cartItems = cartItems.map(item => item.id === productId ? {...item, quantity} : item);
        return {message:'success'}
    }else{
        p.quantity=quantity;
        cartItems.push(p)
        return {message:'success'}
    }
}else{
    return {message:"error out of stock "}
}

// 4. Return success/error message
return {message:"success"}
}

export function removeFromCart(productId) {

// Remove product from cart
 cartItems=cartItems.filter(cp=>cp.id!=productId)
console.log('product removed from cart  if exists ')
return {message:'success'}
}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
const product = getProductById(productId);

cartItems = cartItems.map(e=>{
  if (e.id==productId&&product.stock>=newQuantity){
    return { ...e,quantity:newQuantity };
  }
  return e;
})
return {message:'success'}
}

export function getCartItems() {
// Return all cart items with product details
return cartItems;
}

export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
let total=0;
for (let v of cartItems){
    total+=v.quantity*v.price
}
return total;
}

export function clearCart() {
    cartItems=[];
    console.log('cart items cleared ');
// Empty the cart
}

