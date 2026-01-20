// mutable 
// all reference types are mutable


// immutable
 // ALL primitives are immutable
//  let a=10;
//  a=a+1;
 // -> 10 
 // a -> 11

 // create 3 classes
 
 emp={
    empId:5,
    empName:'cenxh',
    city:'Hyderabad'
 }
 console.log(emp)
 //delete
 delete emp.empName
 //lock 
 Object.freeze(emp)
 emp.empId=11
 //read keys 
 console.log(Object.keys(emp))
 //read values
 console.log(Object.values(emp))