/* Custom objects */

// defining a class
// In JS, the function serves as the constructor. No need to explicity define it.
// Person constructor
var Person = function (firstName) {
  // properties: variables contained in the class that every instance has.
  this.firstName = firstName;
};

// class methods
Person.prototype.sayHello = function () {
  console.log('Hello, I\'m ' + this.firstName);
};

Person.prototype.walk = function () {
  console.log('I am walking!');
};

// Student constructor
function Student(firstName, subject) {
  Person.call(this, firstName);
  this.subject = subject;
}

// Student.prototype object that inherits from Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Override sayHello method
Student.prototype.sayHello = function () {
  console.log('Hello, I\'m ' + this.firstName + '. I\'m studying ' + this.subject + '.');
};

// add a sayGoodBye method
Student.prototype.sayGoodBye = function () {
  console.log('Goodbye!');
};

// creating a class instance (object)
var person1 = new Person('Alice');
var person2 = new Person('Bob');
var student1 = new Student('Janet', 'Applied Physics');

// call the Person sayHello method
person1.sayHello();
person2.sayHello();

// call methods of the Student class
student1.sayHello();
student1.sayGoodBye();

// call the walk method of Person
student1.walk();

console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true
