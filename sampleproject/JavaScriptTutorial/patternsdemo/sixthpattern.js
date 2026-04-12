// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let rows = 5;
//  for(let i=1;i<=rows;i++){
//     let output = "";
// for(let j=1;j<=rows;j++){
//     if(j<=i){
//         output += j + " ";
//     }
// }
// console.log(output);
// }

//while loop

// let rows = 5;
// let i=1;
// while(i<=rows){
//     let output = "";
//     let j = 1;
// while(j<=i){
//     output += j+ "";
//     j++;
  
// }
// console.log(output);
//     i++;
// }


//Do while

let rows = 5;
let i=1;
do{
    let output = "";
    let j = 1;
    do{
      output += j+ "";
      j++;
     }while (j <= i);

    console.log(output);
    i++;
} while (i <= rows);