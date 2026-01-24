let enrollmentDeadline = new Date("2026-01-20");//june 1 //jan 30
let today=new Date()
// * Today is before deadline → "Enrollment Open"
// * Today is after deadline → "Enrollment Closed"

if (today< enrollmentDeadline){
    console.log("Enrollment open")
}else{
    console.log(" Enrollmentclosed")
}

// 2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let d1 =new Date("2026-02-30")
let [y,m,d]=d.split("-")
if(d1.getFullYear ==y && d1.getMonth()==m && d1.getDate()==d){
    console.log("valid")
}else{
console.log("Invalid")
}
