let str = "ProGrAm123 JaVa";
let uppercount = 0;
let lowercount = 0;

for(let ch of str){
    if(ch>= 'A' && ch<= 'Z'){
        uppercount++;
    }else if(ch>= 'a' && ch<= 'z'){
            lowercount++;
        }
    }
    console.log("uppercase letters:",uppercount);
    console.log("lowercase:",lowercount);

