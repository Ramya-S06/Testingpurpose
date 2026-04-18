let d=new Date()
console.log(d);
 
//Extract days [It provides day number for Saturday it provides 6]
let result1=d.getDay()
console.log("Days :"+result1);
// Display Date value
let result2=d.getDate()
console.log("Date Value :"+result2);
 
//display Month Value
let result3= d.getMonth()+1 // 0 to 11
console.log("Month Value :"+result3);
 
//display Year value
let result4 = d.getFullYear()
console.log("Year Value :"+result4);
 
//Display only the Date Result
let resultDate = d.getDate()+"-"+(d.getMonth()+1) +"-"+d.getFullYear()
console.log("Complete Date Result :"+resultDate);
 
//display Hour
let timeresult1=d.getHours()
console.log("Display hour :"+timeresult1);
//display Minutes
let timeresult2=d.getMinutes()
console.log("Display Minutes :"+timeresult2);
 
//display Seconds
let timeresult3=d.getSeconds()
console.log("Display Seconds :"+timeresult3);
 
//Display Complete Time
let timeresult4 = d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds()
console.log("Complete Time Result :"+timeresult4);