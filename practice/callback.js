
let marks=[10,30,89,65,45]
// filter ( selection )
let res=marks.filter(e => e>70)
console.log(res)
//map( modification )
let res2=marks.map(e => e+5)
console.log(res2)
//reduce
let small=marks.reduce((acc,el) => acc<el?acc:el)
console.log("smallest : ",small)
//find 
console.log("searched 23 :" ,marks.find(e => e===23))
console.log("findIndex : ",marks.findIndex(e => e==65))
