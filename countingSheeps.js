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