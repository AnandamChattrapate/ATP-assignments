
 //Array
//  let marks=[90,87,89,67,56]
//  let skills=['html','java script','angular']
//  sum=0
//  for (v of marks){
// sum+=v;
//  }
 //console.log(sum);
 //write a funct that recives marks arr as arg and returns smallest one
//  function min(a){
//     min=9999999;
//     for ( x of a){
//         if (min>x){
//             min=x;
//         }
//     }
//     return min
//  }
//  //console.log("min :",min(marks))
 
// function task(skill,skills){
//     for(i=0;i<skills.length;i++){
//         if (skills[i]==skill){
//             return i;
//         }
//     }return -1;
// }
//  console.log('skill : html',task('html',skills))
 empObj={
    Name:'alex',Age:18,Roll:1,City:'hyderabad'
 }
 for (v in empObj){
    console.log(v,'is',empObj[v])
 }
 prod={
    productName:"denim",
    brand:'celine',
    price:999
 }
 for (v in prod){
    console.log(v,' is ',prod[v])
 }