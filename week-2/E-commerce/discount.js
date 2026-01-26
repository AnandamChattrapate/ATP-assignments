import { getCartItems,getCartTotal } from './cart.js';
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
let coupon=coupons[couponCode];
if (!coupon){
    return {valid:false,message:'coupon does not exist'}
}

// 2. Check minimum amount requirement
if (cartTotal<coupon.minAmount){
    return {valid:false,message:`min amount shoud be ${coupon.minAmount}`}
}
// 3. Check category requirement (if any)
if(coupon.category){
    let hasCategory=false
    for(let item of cartItems){
        if(item.category===coupon.category){
            hasCategory=true
            break
        }
    }
    if(!hasCategory){
        return {valid:true,message:'Coupon not applicable for this category'}
    }
}
return {valid:true,message:'Coupon applied successfully'}
// Return { valid: true/false, message: '...' }

}


export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
let discountAmount;
let coupon=coupons[couponCode]
if(coupon.type=='percentage'){
discountAmount=(cartTotal/100)*coupon.value
}
else{ 
discountAmount=(cartTotal-coupon.value)
}
// Return discount amount
return discountAmount;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
let v=validateCoupon(couponCode,cartTotal,cartItems)
if (!v.valid){
    return {valid:false,message:v.message}
}
// 2. If valid, calculate discount
let discountAmount=calculateDiscount(couponCode,cartTotal)
let finalTotal=cartTotal-discountAmount

// 3. Return final amount and discount details
return {
    valid:true,
    originalTotal:cartTotal,
    discount:discountAmount,
    finalTotal:finalTotal,
    message:'coupon applied successfully ',
}
// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
// }
}