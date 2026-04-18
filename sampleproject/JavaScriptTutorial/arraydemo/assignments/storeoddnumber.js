let arr = [];

//Store odd numbers from 1 to 50
 for(let i=1;i<=50;i++){
    if(i%2 !== 0){
        arr.push(i);
    }
 }

 //Read the elements
 for(let num of arr){
    console.log(num);
 }

 