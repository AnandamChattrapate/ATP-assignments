const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  1. Create a Date object for current date & time.
let d1=new Date()
const week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//  2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
console.log(d1.getFullYear())
console.log(months[d1.getMonth()])
console.log(d1.getDate())
console.log(week[d1.getDay()])

console.log("hours : ",d1.getHours(),"minutes : ",d1.getMinutes(),"seconds : ",d1.getSeconds())
let date,month,year,h,m,s;
// Display the date in this format:
// DD-MM-YYYY HH:mm:ss

date=d1.getDate()
month=d1.getMonth()
year=d1.getFullYear()
h=d1.getHours()
m=d1.getMinutes()
s=d1.getSeconds()
console.log(date,'-',month,'-',year, ' ',h,'-',m,'-',s)
