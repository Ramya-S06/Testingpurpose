//  If a function is returning the value, the return value we can use inside the body of other functions.
function add1(x,y){
    return (x + y)
}
 
function sub1(a,b){
    let result=(a -b)
    return result
}
 
function multiplication(){
    let a=add1(5,3)
    let b=sub1(60,40)
    let result=( a * b)
    console.log("Multiplication Result :"+result);
}
 
multiplication()