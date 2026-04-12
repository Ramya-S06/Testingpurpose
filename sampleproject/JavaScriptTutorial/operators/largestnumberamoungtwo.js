function findLargest(num1, num2){
    if(num1 > num2){
        console.log(num1 +" is the largest number");
    }else if(num2 > num1){
        console.log(num2 +" is the largest number");
    }else{
        console.log("Both are same numbers")
    }
}
findLargest(10, 20);
findLargest(40, 30);
findLargest(20, 20);
