let str = "JavaScript Learning";
let vowels = "";

for(let ch of str){
    if("aeiouAEIOU".includes(ch)){
        vowels +=ch;
    }
}
console.log("vowels count:",vowels);
