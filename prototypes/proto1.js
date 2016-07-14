var Person = function () {
  this.canTalk = true;
  this.canWalk = true;
};

Person.prototype.greet = function () {
  this.shakeHands = true;
  if (this.canTalk && this.canWalk) {
    console.log('Hi, I am ' + this.name + '. I can walk.');
  }
};

var Employee = function (name, title) {
  Person.call(this);
  this.name = name;
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  if (this.canTalk && this.canWalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title + '. I can walk.');
  }
};

var Customer = function (name) {
  Person.call(this);
  this.name = name;
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var Mime = function (name) {
  Person.call(this);
  this.name = name;
  this.canTalk = false;

  if (this.canWalk) {
    console.log('Name is Mime. I can\'t talk, but I can walk.' );
  }
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');
var steve = new Person();

bob.greet(); // Hi, I am Bob, the Builder. I can walk.
joe.greet(); // Hi, I am Joe. I can walk.
rg.greet(); // Hi, I am Red Green, the Handyman. I can walk.
mike.greet(); // Hi, I am Mike. I can walk.
mime.greet(); // Name is Mime. I can't talk, but I can walk.
steve.greet(); // Hi, I am undefined. I can walk.
