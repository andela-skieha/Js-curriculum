// iterates over property values, not property names

let arr = [3, 5, 7];
arr.foo = "hello";

console.log(arr);
for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}
