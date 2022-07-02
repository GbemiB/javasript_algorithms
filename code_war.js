// FACTORIAL
function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

let n = factorial(8);
console.log(n); // 40320


// PALIDROME
function isPalindrome(x) {
  return (x === '') ? '' : reverseString(x);
}
let string = isPalindrome("HELLO");
console.log(string);


// REVERSE STRING FUNCTION
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));


// IS DATE TODAY'S DATE
function isToday(date) {
  let today = new Date();
  if (date.toDateString === today.toDateString) {
    return true;
  }
  else {
    return false;
  } 
}

function isToday(date) {
  var d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
}

// Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => Object.entries(gunners)
  .some((e) => e[1] === 'nay') ? 'Shiver me timbers!' : 'Fire!';


 // Who likes it? 
  function likes(names) {
    names = names || []
    switch (names.length) {
      case 0:
        return 'no one likes this'
      case 1:
        return `${names[0]} likes this`
      case 2:
        return `${names[0]} and ${names[1]} like this`
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }  


 //  Fix string case

  function solve(s){
    const convertToUpperCase=s.split('').filter(v=>v.match(/[A-Z]/)).length
    const convertToLowerCase=s.split('').filter(v=>v.match(/[a-z]/)).length
    return convertToLowerCase>=convertToUpperCase?s.toLowerCase():s.toUpperCase();
}

//Area or Perimeter

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (l + w) * 2;
};

//Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  return string.replace(/!$/,'');
}

// Well of Ideas - Easy Version
function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}

// Sum The Strings
function sumStr(a,b)  {
  return String(Number(a)+Number(b));
}


// Remove First and Last Character
function removeChar(str){
  return str.slice(1, str.length - 1);

};

//Grasshopper - If/else syntax debug
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}


function paperwork(n, m) {
  if ( n  <  0 || m < 0) {
    return 0
    } else {
      return n * m;
   }
}

// For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
   var brickVolume = 2 * Math.pow(radius, 2) * (bottleLength - rimLength);
  return brickVolume;
}


//Counting sheep...
function countSheeps(arrayOfSheep) {
  // declare variable of size
     var sheepCount = 0;
     // iterate through the array
     for( var i = 0; i < arrayOfSheep.length; i++) {
       // check for true
       if(arrayOfSheep[i]=== true) {
          // add it to the count
         sheepCount++;
       }
     }
     //return number of sheep
     return sheepCount;
 }

 //Sum of odd numbers

 function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
function rowSumOddNumbers(n) {
  return n*n*n
}

//Convert a Boolean to a String
function booleanToString(b){
  if (b === true){
    return"true"
  }
  else {
    return "false"
  }
}

//USD TO CNY
function usdcny(usd) {
  return`${(usd*6.75).toFixed(2)} Chinese Yuan`;
}


