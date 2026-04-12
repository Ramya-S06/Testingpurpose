// if any number divisiable by 1 and itself alone
/*
  Given Number: 8
   Exclude : 1 & 8
    2,3,4,5,6,7
   Given Number % (2,3,4,5,6,7)  == 0  --> It is not a prime number
*/
let num=14008
let flag=0
for(let i=2;i<num;i++){
    if(num % i == 0){
        flag++
    }
}
 
if(flag==0){
    console.log(num+" is a Prime Number");
}else{
    console.log(num+" is not a Prime Number");
}