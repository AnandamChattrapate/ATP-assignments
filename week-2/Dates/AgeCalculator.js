// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = new Date("2000-05-15");


// Tasks:
//         1. Calculate exact age in years
let d=new Date()
y=d.getFullYear()-dob.getFullYear()
m=d.getMonth()-dob.getMonth()
if (m<0) {
  y--;
  m+=12;
}
console.log(y+" years");
