function characterVowel(char){
    let vowels = "aeiouAEIOU";

    if(vowels.includes(char)){
        console.log(char + "is a vowel");
    }else{
        console.log(char + "is not a vowel");
    }

}
characterVowel('a');
characterVowel('i');
characterVowel('w');
