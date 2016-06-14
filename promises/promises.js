// creating a promise
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (x == y) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

// using the promise
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // "Error: It broke!"
});
