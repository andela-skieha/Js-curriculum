// using JSON.stringify to serialize an object
var christmasList = {
  mike: "Book",
  jason: "sweater",
  chelsea: "iPad"
};
console.log(christmasList); // this is an object
console.log(JSON.stringify(christmasList, null, 2)); // this is a string

// using JSON.parse to deserialize an object
var christmasListStr = '{"mike": "Book", "jason": "sweater", "chels": "iPad"}';
console.log(christmasListStr); // this is a string
var christmasListObj = JSON.parse(christmasListStr);
console.log(christmasListObj); // this is an object
