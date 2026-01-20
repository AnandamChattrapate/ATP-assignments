
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



// 2 : Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
let res1=students.filter(e => e.marks>=40)
console.log(res1)
// 2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
students.filter(e => {
    if (e.marks>=90){
        e.grade="A"
    }else if (e.marks>=75){
        e.grade="B"
    }else if (e.marks>=60){
        e.grade="C"
    }else {
        e.grade="D"
    }
})
console.log("after adding grade : ",students)

// 3. reduce() to calculate average marks
console.log(" Average marks : ",students.reduce((acc,ele) => {
    if (typeof acc==='object' ){
        return acc.marks+ele.marks
    }else {
        return acc+ele.marks
    }return acc
})/students.length)
// 4. find() the student who scored 92
console.log(students.find(e => e.marks===92))
// 5. findIndex() of student "Kiran"
console.log(students.findIndex(e => e.name==='Kiran'))


// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
     // 1. filter() employees from IT department
console.log(employees.filter(e => e.department==='IT'))


    // 2. map() to add:
    //         netSalary = salary + 10% bonus
employees.map(e => {
    e.netSalary=e.salary*0.10 + e.salary;
})
console.log(employees)

    // 3. reduce() to calculate total salary payout
const totalSalaryPayout=employees.reduce(
  (total,emp) => total + emp.netSalary,0);
console.log(totalSalaryPayout)
    // 4. find() employee with salary 30000
console.log(employees.find(e => e.salary===30000))
    // 5. findIndex() of employee "Neha"
console.log(employees.findIndex(e => 
    e.name=='Neha'
))


// ASSIGNMENT 4: 
// Movie Streaming Platform
// You are working on a movie recommendation system.


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


    // 1. filter() only "Sci-Fi" movies
let scifi=movies.filter(e => {
    return e.genre=="Sci-Fi"
})
console.group("Sci-Fi : ",scifi)
    // 2. map() to return:
    //         "Inception (8.8)"
console.log(movies.map(e => {
     return e.title=="Inception" && e.rating==8.8? e: ""
}))

    // 3. reduce() to find average movie rating
console.log("Average rating : ",movies.reduce((acc,ele) => {
    if (typeof acc=='object' ){
        return acc.rating+ele.rating
    }else{
        return acc+ele.rating
    }
    return acc
})/movies.length)

    // 4. find() movie "Joker"
console.log(movies.find(e => e.title=="Joker"))
    // 5. findIndex() of "Avengers"
console.log(movies.findIndex(e => e.title=="Avengers"))



// ASSIGNMENT 5: 
// Bank Transaction Analyzer
// You are building a bank statement summary.


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


    // 1. filter() all credit transactions
let creditTransactions=transactions.filter(e => e.type=="credit")
console.log(creditTransactions)
    // 2. map() to extract only transaction amounts
console.log(transactions.map(e => {
    return e.amount
}))
    // 3. reduce() to calculate final account balance
console.log("final account balance ",transactions.reduce((acc,ele) => {
    if (typeof acc=='object'){
        return acc.amount+ele.amount
    }else{
        return acc+ele.amount
    }return acc
}))
    // 4. find() the first debit transaction
console.log(transactions.find(e => e.type=='debit'))
    // 5. findIndex() of transaction with amount 10000
console.log(transactions.findIndex(e => e.amount===10000))