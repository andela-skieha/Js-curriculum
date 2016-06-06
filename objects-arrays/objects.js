/* Object: Unordered list of primitive data types stored as a serird
   of key-value pairs.
*/
// Creating Objects using Object Literals
// empty object initialized using object literal notation
var myBooks = {};

// object with items using object literals
var mango = {
  color: "yellow",
  shape: "round",
  sweetness: 6,
  howSweetAmI: function () {
    console.log("Good");
  }
};
console.log(mango);

// Creating Objects Using the Object Constructor
var mango = new Object();
mango.color = "yellow";
mango.shape = "round";
mango.sweetness = 8;
mango.howSweetAmI = function () {
  console.log("Good");
};
console.log(mango);
