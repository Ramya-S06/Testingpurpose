// for (let num = 100;num<=150;num++){
//     let isPrime = true;

//     if(num<2){
//         isPrime = false;
//     } else {
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num % i === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     if(isPrime){
//         console.log(num);
        
//     }
// }

//while

// let num = 100;

// while (num <= 150) {
//     let isPrime = true;
//     let i = 2;

//     if (num < 2) {
//         isPrime = false;
//     }

//     while (i <= Math.sqrt(num)) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++;
//     }

//     if (isPrime) {
//         console.log(num);
//     }

//     num++;
// }



//Do while

let num = 100;

do {
    let i = 2;
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    }

    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        console.log(num);
    }

    num++;
} while (num <= 150);