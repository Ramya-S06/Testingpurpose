// indexOf  -> Position  -> from Left to Right
let s1="xxaxxaxxaXXAXXA"
console.log(s1.indexOf('A'));
 
let s2="It is a book, It is!!"
console.log(s2.indexOf('is'));
console.log(s2.indexOf('book'));
console.log("-----------------------")
//lastIndexOf  -> Position  -> From Right to Left
let s3="xxaxxaxxaXXAXXA"
console.log(s3.lastIndexOf("A"));
 
let s4="It is a book, It is!!"
console.log(s4.lastIndexOf("is"));
console.log(s4.lastIndexOf("book"));
console.log("-----------------------")
//slice function
let s5="Good Morning"
console.log(s5.slice(0,4));
console.log("-----------------------")
//split function
let s6="Mango,Apple,Ornage,Grapes,Banana"
let fruits=s6.split(",")
for(let x of fruits){
    console.log(x);
}
console.log("-----------------------")
//trimStart --> removes blank spaces at left hand side
let s7="   Welcome     "
console.log("Before trim :"+s7.length);
console.log(s7.trimStart());
console.log("After trim :"+s7.trimStart().length);
console.log("-----------------------")
//trimEnd -> removes blank spaces at Right hand side
let s8="   Welcome     "
console.log("Before trim :"+s8.length);
console.log(s8.trimEnd());
console.log("After trim :"+s8.trimEnd().length);
console.log("-----------------------")
//trim -> removes blank spaces at both sides
let s9="   Welcome     "
console.log("Before trim :"+s8.length);
console.log(s8.trim());
console.log("After trim :"+s8.trim().length);
 