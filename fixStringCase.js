 //  Fix string case
 function solve(s){
    const convertToUpperCase=s.split('').filter(v=>v.match(/[A-Z]/)).length
    const convertToLowerCase=s.split('').filter(v=>v.match(/[a-z]/)).length
    return convertToLowerCase>=convertToUpperCase?s.toLowerCase():s.toUpperCase();
}