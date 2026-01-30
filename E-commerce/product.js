const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
// TODO: Implement these functions
                          
export function getProductById(id) {
// Find and return product by ID
for (let v of products){
    if (v.id==id){
        return v
    }
    
}
return false
}

export function getAllProducts() {
return products;
}

export function getProductsByCategory(category) {
// Filter products by category
return products.filter(p=>p.category===category);
}
//console.log(getProductsByCategory(products,'accessories'))
export function searchProducts(query) {
// Search products by name (case-insensitive)
let result=products.find(e=>e.name.toLowerCase()==query.toLowerCase())
return result;
}

export function checkStock(productId, quantity) {
// Check if product has enough stock
for (let v of products){
    if(v.id==productId && v.stock>=quantity){
        return true
    }
}
return false
// Return true/false
}

export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
return products.map(product =>{
    if (product.id==productId){
        if(product.stock<quantity){
            console.log("insufficient stocks ");
            return
        }
        return {
            ...product,
            stock:product.stock-quantity
        }
    }
    return product;
})

}
