// 1
let totalAmount=0;
function add(a){
    return totalAmount+=a;
}
function sub(x){
    return totalAmount-=x;
}
function gst(t,x){
    
    totalAmount=t*1.18
    return totalAmount
}
//   1. Add ₹500 to the total
console.log(add(500));
//   2. Add ₹1200 to the total
console.log(add(1200));
//   3. Apply a ₹200 discount
 console.log(sub(200));
//   4. Add 18% GST
console.log(gst(totalAmount,18));

//   5. Print the final bill amount
console.log("final bill : ",totalAmount);
