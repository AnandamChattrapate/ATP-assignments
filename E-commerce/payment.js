import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
let cartItems=getCartItems()
let cartTotal=getCartTotal()
let final=cartTotal
// 2. Apply discount if coupon provided
let discountTotal;
if (couponCode){
    discountTotal=applyDiscount(cartTotal,couponCode,cartItems);
        if (!discountTotal.valid){
        return discountTotal.message
        }
    final=discountTotal.finalTotal
}
// 3. Validate payment method (card/upi/cod)
let valid=validatePaymentMethod(paymentMethod)
if(!valid) return 'Invalid Payment method'
// 4. Process payment (simulate)
console.log('===========Processing Payment==========')
// 5. Reduce stock for all items
for(let item of cartItems){
    reduceStock(item.id,item.quantity)
}
// 6. Clear cart
clearCart()

// 7. Generate order summary
return{
  orderId:generateOrderId(),
  items:cartItems,
  subtotal:cartTotal,
  discount:discountTotal?cartTotal-final:0,
  total:final,
  paymentMethod:paymentMethod,
  status:'success',
  message:`Amount paid : ${cartTotal}`
}
}
export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method=='upi' || method=='cod'|| method=='card'){
    return true;
}return false;
}

function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}