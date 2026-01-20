
// 1 : Daily Temperature Analyzer
const temperatures = [32, 35, 28, 40, 38, 30, 42];


//   1. filter() temperatures above 35
let x=temperatures.filter(e => e> 35)
console.log("temp above 35 : ",x);
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let y=temperatures.map(e =>  e*(9/5)+32)
console.log("Fahrenheit : ",y)
//     3. reduce() to calculate average temperature
let r=temperatures.reduce((a,e) => a+e)
console.log("average temp : ",r/temperatures.length)
//     4. find() first temperature above 40
console.log("first temp above 40 : ",temperatures.find(e => e>40))
//     5. findIndex() of temperature 28
console.log("find index temp = 28 ",temperatures.findIndex(e => e===28))



// 2 : You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongodb", "express"];

//     1. filter() courses with name length > 5
console.log("courses with name length > 5 : ",courses.filter(e => e.length==5))

//     2. map() to convert course names to uppercase

let res2=courses.map(e => e.toUpperCase())
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


//  3 : Student Marks List

const marks = [78, 92, 35, 88, 40, 67];
    // 1. filter() marks ≥ 40 (pass marks)
let r1=marks.filter(e => e>=40)
console.log(" marks ≥ 40 : ",r1)
    // 2. map() to add 5 grace marks to each student
let r2=marks.map(e => e+5)
console.log(" add 5 grace marks : ",r2)
    // 3. reduce() to find highest mark
let r3=marks.reduce((acc,ele) => {
acc>=ele?acc:ele
    })
console.log(" find highest mark :  ",r3)
    // 4. find() first mark below 40
console.log(" first mark below 40 ",marks.find(e => e<40))

    // 5. findIndex() of mark 92
console.log(" findIndex() of mark 92: ",marks.findIndex(e => e==92))

