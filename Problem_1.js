/* the question (Multiples of 3 and 5) 
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


*/

// we will create an array named "result "

var result =[ ];

// we will create a loop that will find numbers between 1 and 1000 that are multiples of 3 and 5 
//and then push the numbers to the array "result"

for ( var j = 1 ; j < 1000 ; j+=1  )
{ if ( j % 3 === 0  || j % 5 === 0 ){ 
result.push (j );  }
}

//this function will find the sum of  the numbers in  the array "result" and give us the final answer  to the question 
var total = result.reduce (function (z,y){
  return z + y
});


document.write(total);
