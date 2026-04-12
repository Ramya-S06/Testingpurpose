let num=21
 
if(num>=0 && num<10){
    console.log(num+" is One Digit");
}else if(num>=10 && num<100){
    console.log(num+" is two Digits");
}else if(num>=100 && num<1000){
    console.log(num+" is three Digits");
}else if(num>=1000 && num<10000){
    console.log(num+" is Fours Digits");
}else{
    console.log("It is five or More than Five Digits");
   
}