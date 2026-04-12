/*
 
* * * * * * *
* * * * * * *
* * * * * * *
 
Number of Rows ?
Number of Columns?
 
Number of Rows  -> Outer Loop
Number of Columns  -> Inner Loop
 
*/
// let pattern=""
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=7;j++){
//         pattern=pattern+" * "
//     }
//     pattern=pattern+"\n"
// }
// console.log(pattern);


// let i = 1;
// let pattern = ""
// while(i<=3){
//       let j =1;

//       while (j<=7){
//         pattern = pattern + " * ";
//         j++;
//       }
//       pattern = pattern + "\n";
//       i++;
// }
// console.log(pattern);

let i = 1;
let pattern = ""
do{
    let j =1;
    do{
        pattern = pattern + " * ";
        j++;
    }
      while (j<=7);
    pattern = pattern + "\n";
      i++;
}while(i <=3)
console.log(pattern);
   