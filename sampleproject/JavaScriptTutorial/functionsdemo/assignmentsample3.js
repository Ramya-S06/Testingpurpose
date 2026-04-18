// Write a function to find factorial of a given number?
 
function findFact(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact = fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
   
}
 
findFact(4)
findFact(5)
findFact(6)