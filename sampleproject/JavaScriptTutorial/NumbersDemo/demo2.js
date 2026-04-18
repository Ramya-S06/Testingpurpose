// parseInt  -> It converts teh String representation of number in to Integer
//Example for Addtion of two numbers
let x=100
let y="25"
let addition = (x + y)
console.log("Addition Result :"+addition);
 
console.log("---------------------------");
let a=100
let b="25"
let result1=a + Number.parseInt(b)
console.log("Addition Result :"+result1);
 
console.log("---------------------------");
//parseFloat -> It converts teh String representation of floating point number into in to floating point
let m=12.75
let n="10.145"
let results2=(m + n)
console.log("Decimal Addition :"+results2);
let result3= m + Number.parseFloat(n)
console.log("Decimal Addition :"+result3);