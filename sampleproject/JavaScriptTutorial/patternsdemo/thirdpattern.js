//*/
// 1
// 1 1
// 1 1 1
// 1 1 1 1
// 1 1 1 1 1


// /*
// let rows = 5
// for(let i =1;i<=rows;i++){
//     let output = "";

//     for(let j=1;j<=i;j++){
//         output += "1 ";
// }
// console.log(output);
// }


//while loop

// let rows = 5;
// let i = 1;

// while(i<=rows){
//   let output = "";
//   j = 1;
//   while(j<=i){
//     output += "1 ";
//     j++;
//   }
//   console.log(output);
//   i++;
// }

//Do while

let rows = 5;
let i = 1;

do{

  let output = "";
  j = 1;
  while(j<=i){
    output += "1 ";
    j++;
  }while(j<=i);
  console.log(output);
  i++;
}while(i<=rows);
