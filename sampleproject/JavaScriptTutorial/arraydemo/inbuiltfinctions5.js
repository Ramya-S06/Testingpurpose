const { log } = require("node:console");
 
// length -> It provides number of Elements in an Array
let fruits = ["Orange","Apple","Grapes","Mango","Watermelon"]
console.log("Number of Eleemnts :"+fruits.length);
console.log("-----------------------------")
 
//slice -> It extract Elements from Range or based on Position
let fruits1 = ["Orange","Apple","Grapes","Mango","Watermelon"]
let result1=fruits1.slice(1,3)
console.log(result1);
 
console.log("-----------------------------")
//includes -> It works based on contains approach, It provides true if element exists
let places = ["Mysore","Kolar","Hasan","Tumkur"]
let isPresent=places.includes("Hasan")
console.log("IS Element Exists :"+isPresent);
 
//splice -> It deletes elements
let places1 = ["Mysore","Kolar","Hasan","Tumkur","Mumbai","Delhi"]
let result2 = places1.splice(2,2)
console.log("Deleted Elements :"+result2);