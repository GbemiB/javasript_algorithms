// PALIDROME
function isPalindrome(x) {
  return (x === '') ? '' : reverseString(x);
}
let string = isPalindrome("HELLO");
console.log(string);