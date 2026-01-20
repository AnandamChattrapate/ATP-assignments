let a=10
let b="hello"
let flag=true
let arr=[1,2,3,4]
let std={a:1,b:2}
console.log("a type",typeof a)
console.log('type b',typeof b)
console.log( typeof std)
const sum = (a,b) => {
    return a+b;
}
 
console.log(sum(1,2))
function max(a,b,c){
   
    if (a>b && a>c){
        return a;
    }else if(b>c && b>a){
        return b;
    }else if (c>b && c>a){
        return c;
    }
    else{
        return a ;
    }
    
}
console.log(max(1,2,4))
const maxi = (a) => {
    let maxi=-1;
    for(let i=0;i<a.length;i++){
        if (a[i]>=maxi){
            maxi=a[i];
        }
    }
    return maxi;
}
 console.log(maxi([1,2,3,4,5,6,7]))
