//reverse -> It reverse the Elements in an array
let flowers=["Lotus","sunflower","Tulip","cosmos"]
let result=flowers.reverse()
console.log(result);
console.log("--------------------------");
 
//Concat -> It combines Elements of both teh arrays
let fruits=["Apple","Mango","Watermelon","Orange"]
let even = [2,4,6,8,10]
let result2=fruits.concat(even)
console.log(result2);
console.log("--------------------------");
 
//IndexOf -> It provides teh ;position of an Element from Left to Right
let fruits1=["Apple","Mango","Watermelon","Orange","Mango","Grapes"]
let result3=fruits1.indexOf("Grapes")
console.log("Position of Element :"+result3);
console.log("--------------------------");
//lastIndexOf -> It provides teh ;position of an Element from Right to Left
let fruits2=["Pineapple","Mango","Watermelon","Orange","Mango","Grapes"]
let result4=fruits2.lastIndexOf("Mango")
console.log("Position of Element 'Right to Left:"+result4);