let students=[
    {sno:1,name:"ravi",age:21},
    {sno:2,name:"vikas",age:19},
    {sno:3,name:"manoj",age:15},
    {sno:4,name:"madhu",age:30},
]
// age<20
let res=students.filter(so => so.age<20)
console.log(res)
// increment age by 2 years
let res2=students.map(e => {
    if (e.name==='manoj'){  
        e.age=e.age+2
        
    }
    return e
})
console.log("manoj : ",res2)
let r=students.reduce((acc,ele) => {
    
    return (typeof acc==='object'? acc.age:acc)+ele.age
})
console.log("sum of ages : ",r)