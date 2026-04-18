// let str = "PROGRAM";
//  for(let i = 0;i<str.length;i++){
//     let result = "";
//     for (let j=0;j<=i;j++){
//         result += str[j];
//     }
//     console.log(result);
//  }
//  for(let i = str.length-1;i>0;i--){
//     let result = "";

//     for(let j=0;j<i;j++){
//         result += str[j];
//     }
//     console.log(result);
// }


let str = "PROGRAM";
let n = str.length;

for(let i=1;i<=n;i++){
  let result = "";
  for(let j=0;j<i;j++){
    result += str[j]+ " ";
  }
  console.log(result);
}
for(let i =n-1;i>=1;i--){
    let result = "";
    for(let j=0;j<i;j++){
        result += str[j]+ " ";
    }
    console.log(result);
    
}
