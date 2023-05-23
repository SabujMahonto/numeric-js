// type
console.log(30 === 30.0); //true
console.log(30 === 30.1); //false
// decimal base = 10 ---> 0-9
// binary base = 2  ----> 0,1
console.log(0.1 + 0.2 === 0.3); // false

//toFixed
const a = 53.25;
const b = 120.5;
const sum = a + b;
console.log(sum.toFixed(1)); // output == string
console.log(Number(sum.toFixed(1))); // output == Number
// console.log(+sum.toFixed(1)); // output == Number // latest technic
