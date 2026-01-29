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
