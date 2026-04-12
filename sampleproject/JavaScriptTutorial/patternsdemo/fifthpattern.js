// A
// B C
// D E F
// G H I J
// K L M N O

// let rows = 5;
// let ch = 65;

// for(i =1;i<=rows;i++){
//     let output = "";

// for(j=1;j<=rows;j++){
//     if(j<=i){
//     output += String.fromCharCode(ch)+ " ";
//     ch++;
//     }
// } console.log(output);
// }

//while loop

// let rows = 5;
// let ch = 65;
// let i = 1;

// while(i<=rows){
//     let output = "";
//     let j=1;
//     while(j<=i){
//         output += String.fromCharCode(ch)+ " ";
//           ch++;
//           j++;
//     }


// console.log(output)
// i++;
// }

//Do while

let rows = 5;
let ch = 65;
let i = 1;
do{

    let output = "";
    let j=1;
    
    do{
        output += String.fromCharCode(ch)+ " ";
          ch++;
          j++;
    }while(j<=i);


console.log(output)
i++;
}while(i<=rows);

