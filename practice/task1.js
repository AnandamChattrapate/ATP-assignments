
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
    
// Calculate total marks
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
    console.log("average marks : ",s/n);
    console.log("highest subject : ",sub);

}
Total(marks)
marks.computer=90
console.log(marks)

