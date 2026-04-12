// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1 




// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//     let output = "";

//     for (let j = 1; j <= i; j++) {
//         output += i + " ";
//     }

//     console.log(output);
// }


//while loop
// let rows = 5;
// let i = rows;

// while (i >= 1) {
//     let output = "";
//     let j = 1;

//     while (j <= i) {
//         output += i + " ";
//         j++;
//     }

//     console.log(output);
//     i--;
// }


//Do while


let rows = 5;
let i = rows;

do {
    let output = "";
    let j = 1;

    do {
        output += i + " ";
        j++;
    } while (j <= i);

    console.log(output);
    i--;
} while (i >= 1);