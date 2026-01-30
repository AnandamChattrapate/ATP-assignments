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
