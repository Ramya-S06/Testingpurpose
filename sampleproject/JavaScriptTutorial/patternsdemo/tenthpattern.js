// 1 
// 3 5 
// 7 9 11 
// 13 15 17 19 
// 21 23 25 27 29




// let rows = 5;
// let num = 1;

// for (let i = 1; i <= rows; i++) {
//     let output = "";

//     for (let j = 1; j <= i; j++) {
//         output += num + " ";
//         num += 2;
//     }

//     console.log(output);
// }



//while loop


// let rows = 5;
// let i = 1;
// let num = 1;

// while (i <= rows) {
//     let output = "";
//     let j = 1;

//     while (j <= i) {
//         output += num + " ";
//         num += 2;
//         j++;
//     }

//     console.log(output);
//     i++;
// }

//Do while loop

let rows = 5;
let i = 1;
let num = 1;

do {
    let output = "";
    let j = 1;

    do {
        output += num + " ";
        num += 2;
        j++;
    } while (j <= i);

    console.log(output);
    i++;
} while (i <= rows);
