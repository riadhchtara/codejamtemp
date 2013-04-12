

function IsApproximatelyEqual(x, y, epsilon){
  /*Returns True iff y is within relative or absolute 'epsilon' of x.

  By default, 'epsilon' is 1e-6.
  */
  // Check absolute precision.


  if ((-epsilon <= (x - y)) && ((x - y)  <= epsilon))
    return true;

  // Is x or y too close to zero?
  if (((-epsilon <=  x) && (x<= epsilon)) ||  ((-epsilon <= y) && (y <= epsilon)))
    return false;


       
  // Check relative precision.
  return (((-epsilon <= ((x - y) / x)) && (((x - y) / x) <= epsilon))
       || ((-epsilon <= ((x - y) / y)) && (((x - y) / y) <= epsilon)));
}


function logyofx(y, x) {
    return Math.log(x) / Math.log(y);
}

function isInt(n){
   return n % 1 === 0;
}

/*
//If you don't know that the argument is a number-

function isInt(n){
   return typeof n === 'number' && n % 1 == 0;
}

//If you also want to include examples such as 1E308 is a float, and not an integer:

function isInt(n){
   return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
} // 6 characters
*/
function intSize(x){
   return (x +"").length;
}




function div(x,y){ //div(4,2) = 2
    return  Math.floor(x/y);
}

