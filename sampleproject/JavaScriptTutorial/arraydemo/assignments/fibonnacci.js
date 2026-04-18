let arr = [];
let a =0 ,b =1;

for(let i=0;i<15;i++){
    arr.push(a);

    let next = a+b;
    a=b;
    b=next;
}
//print elements
console.log(arr);

