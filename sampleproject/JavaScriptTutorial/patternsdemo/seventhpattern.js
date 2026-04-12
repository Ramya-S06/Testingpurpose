
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//     let output = "";

//     for (let j = 1; j <= rows; j++) {
//         if (j <= i) {
//             output += j + " ";
//         }
//     }

//     console.log(output);
// }

//while loop

// let rows = 5;
// let i =rows;
// while(i>=1){
//     let output = "";
//     let j = 1;
//     while(j<=i){
//         output += j + " ";
//         j++;
//     }

//     console.log(output);
//     i--;
// }

//Do while

let rows = 5;
let i =rows;
do{

    let output = "";
    let j = 1;
    do{
        output += j + " ";
        j++;
    }while(j<=i)


    console.log(output);
    i--;
}while(i>=1);
