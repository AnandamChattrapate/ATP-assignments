const courses = ["javascript", "react", "node", "mongodb", "express"];



//     1. filter() courses with name length > 5
console.log("courses with name length > 5 : ",courses.filter(e => e.length==5))

//     2. map() to convert course names to uppercase
let res2=courses.map(e => e.toUpperCase)
console.log("course names to uppercase : ",res2)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res3=courses.reduce((acc,ele) => {
    return acc+' | '+ele
})
console.log("generate a single string : ",res3)
//     4. find() the course "react"
console.log("find() the course react : ",courses.find(e => e==='react'))
//     5. findIndex() of "node"
console.log("findIndex : ",courses.findIndex(e => e==="node"))