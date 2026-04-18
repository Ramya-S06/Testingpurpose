let str = "Hello world";
let vowels = "aeiou";
let v=0;
let c=0;

for(let ch of str.toLowerCase()){
    if(ch>='a' && ch<='z'){
         if(vowels.includes(ch))
         v++;
    }else{
        c++;
    }
}
console.log("vowels:", v);
console.log("Consonants:", c);