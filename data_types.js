// Data Type Conversion
/* In expressions that involve the '+' operator, numeric values
   are converted into strings
*/
console.log('The answer is ' + 42); // logs 'The answer is 42'
console.log(42 + ' is the answer'); // logs '42 is the answer'

/* In statements that involve other operators, eg '-', '*', '/', '%',
   the numeric values are nor converted into strings. They are executed
   acordingly.
*/
console.log('37' - 7); // logs the number 30
console.log('37' + 7); // logs the string '377'

// Converting Strings to Numbers
// using parseInt(), but this only returns whole numbers
console.log(parseInt('37') + 7); // logs the number 44
console.log(parseInt('37.5') + 7); // logs the number 44

// using parseFloat(), supports decimals
console.log(parseFloat('37.5') + 7); // logs the number 44.5

// using the unary plus (+) operator
console.log('1.1' + '1.1'); // logs the string '1.11.1'
console.log(+'1.1' + +'1.1'); // logs the number 2.2
