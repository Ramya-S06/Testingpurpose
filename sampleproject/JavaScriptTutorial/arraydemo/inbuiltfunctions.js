// toString() method is used to convert an array to a string.
// It returns a string with all the array values, separated by commas.
let flowers=["Lotus","sunflower","Tulip","cosmos"]
let result=flowers.toString()
console.log(result) // Output: "Lotus,sunflower,Tulip,cosmos"
// join() method is used to join all the elements of an array into a string.
// It takes an optional parameter which specifies the separator to be used between the elements in the resulting string.
// If no separator is provided, it defaults to a comma.
//Approach1 by default it will use comma as separator
let fruits=["Apple","Banana","Mango","Grapes"]
let result1=fruits.join()
console.log(result1) // Output: "Apple,Banana,Mango,Grapes"
//SEcond Approach by using space/any special character as separator
let result2=fruits.join(" # ")
console.log(result2) // Output: "Apple - Banana - Mango - Grapes"