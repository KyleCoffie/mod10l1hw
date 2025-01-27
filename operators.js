let i = 7000;
let o = 3000;

let Sum = i + o;
let Difference = i - o;
let Product = i * o;
let Quotient = i / o;

console.log("Sum:", Sum);
console.log("Difference:", Difference);
console.log("Product:", Product);
console.log("Quotient:", Quotient);

i = 12000;
o = 100;

console.log("Updated num1:", i);
console.log("Updated num2:", o);

let num1 = 6;
let num2 = 2;

let isGreaterThan = num1 > num2;
let isEqualTo = num1 == num2;
let isNotEqualTo = num1 != num2;



console.log("Is num1 equal to num2?", isEqualTo);
console.log("Is num1 greater than num2?", isGreaterThan);
console.log("Is num1 not equal to num2?", isNotEqualTo);


let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 === 0) || (num2 % 2 ===0);

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);