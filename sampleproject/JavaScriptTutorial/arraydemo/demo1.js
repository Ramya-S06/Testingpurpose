/*
    Programmatically store even numbers from 20 to 40 in to an array and Read the Elements?
    step 1: print numbers from 20 to 40
    step 2: from step display only even number
    step 3: declare an array
    step 4: assign each even number into an array
    step 5: read elements from an array
*/
let a=[]
let k=0
for(let i=20;i<=40;i++){
    if(i % 2 ==0){
        a[k]=i
        k++
    }
}
//Read Elements from array
for(let x of a){
    console.log(x);
}