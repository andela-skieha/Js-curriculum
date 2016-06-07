// Javascript Arrays

// Creating an Array
var fruits = ["apple", "banana"];
console.log(fruits.length);

// Accessing an array item
var first = fruits[0];
console.log(first); // apple
var last = fruits[fruits.length - 1];
console.log(last); // banana

// Looping over an array
fruits.forEach(function (item, index) {
  console.log(item, index);
});

// Adding to the end of an array
var newLength = fruits.push("orange");
console.log(fruits);

// remove from the end of the array
var newLast = fruits.pop();
console.log(fruits);

// remove from the fromt of the array
var newFirst = fruits.shift();
console.log(fruits);

// add to the front of the array
var newerLength = fruits.unshift("strawberry");
console.log(fruits);

// finding the index of an item in the array
fruits.push("mango");
console.log(fruits.indexOf("banana"));

// removing an item by index position
var removedItem = fruits.splice(1); // removes item, returns the resulting array
console.log(removedItem);

// making a copy of the array
var copied = fruits.slice(); // how to make a copy
console.log(copied);
