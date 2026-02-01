// Assignment 2: Exam Result Summary
// Scenario : Marks are stored subject-wise for a student.

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks


function Total(marks){
    let x=Object.values(marks)
    let n=x.length
    let ob=Object.keys(marks)
    console.log("marks ",x)
m=-1
id=-1
s=0
    for (v of x){
        id+=1
        if ( v>=m){
            m=v
            sub=ob[id]
        }
        s+=v;
    }
    // 2. Calculate average marks
// 3. Find the highest scoring subject
    console.log("average marks : ",s/n);
    console.log("highest subject : ",sub);

}
Total(marks)
//     4. Add a new subject computer: 90
marks.computer=90
console.log(marks)
