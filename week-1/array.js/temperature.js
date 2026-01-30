const temperatures = [32, 35, 28, 40, 38, 30, 42];

    // 1. filter() temperatures above 35
let r1=temperatures.filter(e=>e>35)
console.log(r1)

    // 2. map() to convert all temperatures from Celsius → Fahrenheit
let r2=temperatures.map(e=>(((9/5)*e)+32))
console.log(r2)

    // 3. reduce() to calculate average temperature
let r3=(temperatures.reduce((acc,ele)=>acc+=ele))/temperatures.length
console.log(r3)

    // 4. find() first temperature above 40
let r4=temperatures.find(e=>e>40)
console.log(r4)

    // 5. findIndex() of temperature 28
let r5=temperatures.findIndex(e=>e==28)
console.log(r5)
