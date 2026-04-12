// let sum = 0;

// for(let num = 2; num<=50;num++){
//     let isPrime = true;
// //check prime using if condition
//    for (let i =2;i<=num/2;i++){
//     if(num % i == 0)
//     {
//     isPrime = false;
//     break;
//     }

// }
//    if(isPrime){
//     sum = sum+num;
//   }
// }
// console.log("sum of prime numbers from 1 to 50 is :", sum);


//while loop
// let num =2;
// let sum = 0;

// while(num<=50){
//     let i = 2;
//     let isPrime = true;
//     //check if prime
//     while(i<=Math.sqrt(num)){
//         if(num% i== 0){
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
//     //If prime add to sum
//     if(isPrime){
//         sum = sum+num;
//     }
//     num++;
// }
// console.log("sum of prime numbers from 1 to 50 is :", sum);

//Do while

let num =2;
let sum = 0;
do{
    let isPrime = true;
    let i =2;
    while(i<=Math.sqrt(num)){
        if(num% i== 0){
            isPrime = false;
            break;
        }
        i++;
    }
    //If prime add to sum
    if(isPrime){
        sum = sum+num;
    }
    num++;
}while(num<=50);
console.log("sum of prime numbers from 1 to 50 is :", sum);