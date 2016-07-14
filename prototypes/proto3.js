/* Custom objects */

// defining a class
// In JS, the function serves as the constructor. No need to explicity define it.
var Person = function (firstName) {
  // properties: variables contained in the class that every instance has.
  this.firstName = firstName;

  // constructor logs a message whenever a Person is instantiated.
  console.log('Person instantiated');

}

// creating a class instance (object)
var person1 = new Person('Alice');
var person2 = new Person('Bob');

console.log('person1 is ' + person1.firstName); // person1 is Alice
console.log('person2 is ' + person2.firstName); // person2 is Bob
