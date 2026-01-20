// call back function - a function send as argto another function
//ARRAY
let skills=['angular','html','css']
let [s1,s2,s3]=skills
console.log(s1)
//inserting at front  unshift
skills.unshift('node','mongodg')
console.log(skills)
// at back
skills.push('lastsd')
console.log(skills)
// in between splice(index,delete count,elsments)
skills.splice(1,0,'scala')
console.log(skills)
// delete

//at start 
skills.shift()
console.log(skills)
//at end
skills.pop()
console.log()
//in between
skills.splice(1,1)
console.log(skills)
//write a function 