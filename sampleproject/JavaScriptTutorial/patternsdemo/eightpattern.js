// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5




// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let output = "";

//     for (let j = 1; j <= i; j++) {
//         if (j <= i) {
//             output += i + " ";
//         }
//     }

//     console.log(output);
// }


//while loop

// let rows = 5;
// let i = 1;

// while (i <= rows) {
//     let output = "";
//     let j = 1;

//     while (j <= i) {
//         output += i + " ";
//         j++;
//     }

//     console.log(output);
//     i++;
// }


//Do while

let rows = 5;
let i = 1;

do {
    let output = "";
    let j = 1;

    do {
        output += i + " ";
        j++;
    } while (j <= i);

    console.log(output);
    i++;
} while (i <= rows);
