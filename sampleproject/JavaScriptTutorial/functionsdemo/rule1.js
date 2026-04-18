// Rule1 : If a function is returning the value, the return value we can use as parameter to other functions.
 
function add1(x,y){
    return (x + y)
}
 
function sub1(a,b){
    let result=(a -b)
    return result
}
 
function multiplication(x,y){
    let result=(x * y)
    console.log("Multiplication Result :"+result);
}
// first Approach
let p=add1(10,5)
let q=sub1(25,15)
multiplication(p,q)
console.log("-------------------------");
//Second Approach
multiplication(add1(5,5), sub1(50,32))