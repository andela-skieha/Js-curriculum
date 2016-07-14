/* Custom objects */

// defining a class
// In JS, the function serves as the constructor. No need to explicity define it.
var Person = function () {
  // constructor logs a message whenever a Person is instantiated.
  console.log('Instance created');

}

// creating a class instance (object)
var person1 = new Person();
var person2 = new Person();
