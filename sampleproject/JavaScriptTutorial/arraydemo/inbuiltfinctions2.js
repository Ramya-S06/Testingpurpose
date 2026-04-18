//Sort  -> It sorts elements in teh array in ascending order by default.
// It can also sort in descending order by providing a compare function as an argument.
let numbers=[5,2,9,1,5,6]
//Approach 1: Sort in ascending order
let sortedNumbers=numbers.sort()
console.log(sortedNumbers) // Output: [1, 2, 5, 5, 6, 9]
console.log("--------------------------------------");
 
//pop() method is used to remove the last element from an array and returns that element.
let fruits=["Apple","Banana","Mango","Grapes"]
let lastElement=fruits.pop()
console.log(lastElement) // Output:Grapes
console.log(fruits) // Output: ["Apple", "Banana", "Mango"]
console.log("--------------------------------------");
 
//push() method is used to add one or more elements to the end of an array and returns the new length of the array.
let flowers=["Lotus","sunflower","Tulip","cosmos"]
let newLength=flowers.push("Daisy")
console.log(newLength) // Output: 5
console.log(flowers) // Output: ["Lotus", "sunflower", "Tulip", "cosmos", "Daisy"]