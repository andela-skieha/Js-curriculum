function Account() {

}

// prototype attribute created with object literals and Object constructor
// userAccount object inherits from the Object, its prototype attribute is Object.prototype
var userAccount = new Object();
console.log(userAccount.constructor); // Object

// using object literals to create the userAccount object
var userAccount = {
  name: 'Mike'
}

// prototype object created with a constructor function
// initialized with Account cunstructor, its prototype attribute is Account.prototype
var userAccount2 = new Account();
console.log(userAccount2.constructor); // Account
