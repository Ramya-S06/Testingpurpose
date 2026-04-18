let str1 = "xyz";
let str2 = "zyx";

//convert to lowercase
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

//check length

if(str1.length !== str2.length){
    console.log("Not an anagram");
} else{
    //sort both arrays
    let sorted1 = str1.split('').sort().join();
    let sorted2 = str2.split('').sort().join();
    //compare

    if(sorted1 == sorted2){
        console.log("Anagram");
    }else{
        console.log("Not an anagram");
    }

}