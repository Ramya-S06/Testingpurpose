/*
    Write a program to display count of number in between 1 to 100 which are divisible by 7?
    1 to 100  -> count of number
     divisible by 7 -> count of number
*/
let count=0
for(let i=1;i<=100;i++){
    if(i % 7 ==0){
        count=count + 1
    }
}