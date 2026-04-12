// let count = 0;

// for(let num = 2; num<=100;num++){
//     let isPrime = true;

//    for (let i =2;i<num;i++){
//     if(num % i == 0)
//     {
//     isPrime = false;
//     break;
//     }

// }
// if(isPrime){
//     count++;
// }
// }
// console.log("count of prime numbers from 1 to 100 is:"+count);


//while loop

// let num = 2;
// let count = 0;
// while(num<=100){
//     let i = 2;
//     let isPrime = true;
    
//     while(i<=Math.sqrt(num)){
//         if(num% i== 0){
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
//     if(isPrime){
//         count++;
//     }
//     num++;
// }
// console.log("count of prime numbers from 1 to 100 is:"+count);

//do while
let num =2;
let count = 0;
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
    if(isPrime){
        count++;
    }
    num++;
}while(num<=100);
console.log("count of prime numbers from 1 to 100 is:"+count);
