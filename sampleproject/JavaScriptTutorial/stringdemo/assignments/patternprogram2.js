let str = "PROGRAM";

for(let i = str.length-1;i>0;i--){
    let result = "";

    for(let j=0;j<i;j++){
        result += str[j];
    }
    console.log(result);
}
