/* Custom objects */

// defining a class
// In JS, the function serves as the constructor. No need to explicity define it.
var Person = function (firstName) {
  // properties: variables contained in the class that every instance has.
  this.firstName = firstName;

  // constructor logs a message whenever a Person is instantiated.
  console.log('Person instantiated');

}

// class methods
Person.prototype.sayHello = function () {
  console.log('Hello, I\'m ' + this.firstName);
}

// creating a class instance (object)
var person1 = new Person('Alice');
var person2 = new Person('Bob');

// call the Person sayHello method
person1.sayHello();
person2.sayHello();
