/* Object: Unordered list of primitive data types stored as a serird
   of key-value pairs.
*/
// Creating Objects using Object Literals
// empty object initialized using object literal notation
var myBooks = {};

// object with items using object literals
var orange = {
  color: "yellow",
  shape: "round",
  sweetness: 6,
  howSweetAmI: function () {
    console.log("Good");
  }
};

// Creating Objects Using the Object Constructor
var mango = new Object();
mango.color = "yellow";
mango.shape = "round";
mango.sweetness = 8;
mango.howSweetAmI = function () {
  console.log("Good");
};

// finding out if a property exists on an object using the 'in' operator
console.log("color" in orange); // logs true
console.log("size" in orange); // logs false
console.log("toString" in orange); // logs true; orange object inherited the toString method from Object.prototype
