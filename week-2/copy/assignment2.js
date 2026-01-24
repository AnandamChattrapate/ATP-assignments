const order = {
orderId: "ORD1001",
customer: {
name: "Anita",
address: {
city: "Hyderabad",
pincode: 500085
}
},
items: [
{ product: "Laptop", price: 70000 }
]
};


// 1. Create a deep copy of order
  const orderCopy=structuredClone(order);

//       2. Modify in copied object:
//             i. customer.address.city
orderCopy.customer.address.city="gorgea"

//             ii. items[0].price
orderCopy.items[0].price=60000

//             iii. Verify original object remains unchanged
console.log("original Order: ",order);
console.log("copied Order: ",orderCopy);

