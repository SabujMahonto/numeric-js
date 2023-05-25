//Descriptions: numeric js - toFixed,parseInt ,ParseFloat,
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

// parsing
console.log(parseInt("8rem"));
console.log(parseInt("8.5rem"));
console.log(parseFloat("8.5rem"));
console.log(parseFloat("8rem"));

// Number -- Object namespace
console.log(Number.parseInt("16px"));

//NaN
console.log(Number.isNaN(29));
console.log(30 / 0); // infinity

// Number
console.log(isFinite(30)); // true
console.log(isFinite(30 / 0)); // false
console.log(isFinite("24px")); // false
console.log(isFinite(parseInt("34px"))); // true

// Math
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); //square root
console.log(25 ** (1 / 3)); //Qubic root

const arr = [24, 26, 33, 64, 83, 20];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//pi =
//pi*r^2
//2*pi*r^2
// console.log(Math.PI * 2.5 ** 2);
// console.log(Math.trunc(27.3422232));
console.log(Math.random()); // 0-1
console.log(Math.trunc(Math.random() * 10));
console.log(Math.floor(2.5)); // 2
console.log(Math.ceil(2.1)); // 3
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
// console.log(2,34,550);
console.log(2_34_550);
//ES2020 (BigInt)
//64 bit number system in js
console.log(923874234334387987238947934723947838473493);
console.log(100000000n + 10000000n);
console.log(20n === 20); //false
console.log(typeof 20n); // bigint

// Date
const today = new Date();

console.log(today);
// timeStamp
console.log(new Date(0));
const myTime = new Date(2044, 10, 20, 10, 20, 30, 300);
console.log(myTime);

console.log(myTime.getFullYear());
console.log(myTime.getMonth());
console.log(myTime.getDay());
console.log(myTime.getDate());
console.log(myTime.getHours());
console.log(myTime.getSeconds());
console.log(myTime.getMilliseconds());
console.log(myTime.getTime());

console.log(Date.now());
console.log(new Date(1684996393802));
