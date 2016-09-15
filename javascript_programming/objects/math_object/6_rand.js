 // Create a function that takes two arguments, a minimum and a maximum value,
 // and returns a random integer from min through max using Math.random.

 function randomNumber(min, max) {
   var temp;

   if (max === min) {
     return min;
   }

   if (min > max) {
     temp = min;
     min = max;
     max = temp;
   }

   return Math.floor(Math.random() * (max - min + 1) + min);
 }
