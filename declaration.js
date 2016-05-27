// Declaring Variables
// using keyword 'var', can be used for both local and global variables
var x = 42;

/* simply assigning it a value, this always declares a global variable.
   Not recommended.
*/
y = 23;

// using keyword 'let', this can be used to declare a block scope local var
let z = 234;

// Evaluating Variables
/* a variable declared using the var statement without an initial specified value
   logs 'undefined'
*/
var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"

// attempting to access an undeclared variable results in a ReferenceError exception
console.log("The value of b is " + b); // throws ReferenceError exception

/* attempting to access an identifier declared with 'let' before initialization
 results in ReferenceError exception
*/
console.log("The value of c is " + c); // throws ReferenceError exception
let c = 45;