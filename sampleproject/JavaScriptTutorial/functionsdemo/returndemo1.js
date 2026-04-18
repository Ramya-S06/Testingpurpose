// Write a function to read first half of the Elements from a given array?
 
function readFirstHalfElements(arr){
    for(let i=0;i<arr.length/2;i++){
        console.log(arr[i]);
       
    }
}
 
let fruits =["Mango","apple","Grapes","Orange","Watermelon","Jack Fruit"]
readFirstHalfElements(fruits)
console.log("--------------------------------------");
 
// Write a Function to read second half of the elements from a given array?
function readSeconfHalfElements(x){
    for(let i=x.length/2;i<x.length;i++){
        console.log(x[i]);
    }
}
let flowers=["Lotus","Lilly","sunflow","Tulip","Cosmos","Morning glory"]
readSeconfHalfElements(flowers)
console.log("--------------------------------------");
// same parameter name
// Write a Function to read second half of the elements from a given array?
function readSeconfHalfElements1(flowers1){
    for(let i=flowers1.length/2;i<flowers1.length;i++){
        console.log(flowers1[i]);
    }
}
let flowers1=["Lotus","Lilly","sunflow","Tulip","Cosmos","Morning glory"]
readSeconfHalfElements1(flowers1)