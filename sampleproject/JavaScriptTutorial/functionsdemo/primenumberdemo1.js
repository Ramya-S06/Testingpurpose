// Note 2: Write a function to display Prime Numbers from 1 to 50
function isPrime(num){
    let flag=0
    for(let i=2;i<num;i++){
        if(num % i ==0){
            flag=flag+1
            break
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}
 
//display Prime Numbers from 1 to 50
for(let i=1;i<=50;i++){
    if(isPrime(i)==true){
        console.log(i);
       
    }
}
console.log("------------------------");
//find Count of Prime Numbers in between 1 to 100
let count=0
for(let i=1;i<=100;i++){
    if(isPrime(i)==true){
        count=count+1
    }
}
console.log("The Count of Prime Numbers in between 1 to 100 :"+count);
 