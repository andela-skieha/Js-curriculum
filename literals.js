// Literals
/* Array Literals
   A list of zero or more expressions, each known as an array element,
   enclosed in square brackets. Its the length is the number of arguments specified.
*/
var coffees = ['French roast', 'Colombian', 'Kona'];
console.log(coffees);

/* Putting two consecutive commas in a row causes the array to be
   created with 'undefined' for the unspecified elements
*/
var fish = ['Lion', , 'Angel'];
console.log(fish[0], fish[1], fish[2]); // The value of fish[1] is 'undefined'

var myList = [, 'home', , 'school'];
console.log(myList[0], myList[1], myList[2], myList[3]); /* myList has 4 elements,
myList[0] and myList[2] are 'undefined' */

var myList2 = ['home', , 'school', ,];
console.log(myList2[0], myList2[1], myList2[2], myList2[3]); /* myList2 has 4 elements,
myList2[1] and myList2[3] are 'undefined'. The trailing comma is ignored. */
