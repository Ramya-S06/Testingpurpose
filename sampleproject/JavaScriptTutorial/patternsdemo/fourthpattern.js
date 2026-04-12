// 4 4 4 4 4
// 4 4 4 4
// 4 4 4
// 4 4
// 4

// let rows = 5;

// for(let i=rows;i>=1;i--){
//     let output = "";
// for(let j=1;j<=rows;j++)
//     if(j<=i)
//         {
//     output += "4";
// }
// console.log(output);
// }

//while loop

// let rows = 5;
// let i = rows;

// while (i >= 1) {
//     let output = "";
//     let j = 1;

//     while (j <= i) {
//         output += "4 ";
//         j++;
//     }

//     console.log(output);
//     i--;
// }


//Do while

let rows = 5;
let i = rows;


do{
    let output = "";
    let j = 1;

    do{
        output += "4 ";
        j++;
    }while (j <= i)

    console.log(output);
    i--;
}while (i >= 1)