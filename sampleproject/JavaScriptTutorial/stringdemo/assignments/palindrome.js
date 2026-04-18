let str = "madam";
let isPalindrome = true;


for(let i=0;i<str.length/2;i++){
    if(str[i] !== str[str.length-1-i]){
        isPalindrome = false;
        break;
    }
}
if(isPalindrome){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}
