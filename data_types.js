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
