//find factorial of a given number
// Traditional Function Approach
function showFactorial(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+num+" is "+fact);
   
}
showFactorial(4)
console.log("----------------------------------");
let showFactorialNew = function (num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+num+" is "+fact);  
}
showFactorialNew(5)
console.log("----------------------------------");
let showFactorialOfArrowFunc=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+num+" is "+fact);  
}
showFactorialOfArrowFunc(6)
 