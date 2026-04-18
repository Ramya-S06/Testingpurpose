let arr = [];

//Loop from 1 to 50

for(let i=2;i<=50;i++){
    let isPrime = true;

//check if num is prime
for(let j=2;j<i;j++){
    if(i%j === 0){
        isPrime = false;
        break
    }
}

//Store the num
if(isPrime){
    arr.push(i);
}
//print elements
console.log(arr);
}