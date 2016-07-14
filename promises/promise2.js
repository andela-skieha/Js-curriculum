// Promise to make a GET request
function get(url) {
  // return a new promise
  return new Promise(function(resolve, reject) {
    // XHR
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // Check status code
      if (req.status == 200) {
        // resolve with response text
        resolve(req.response);
      } else {
        // reject with status text
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Netwrk Error"));
    };

    // make the request
    req.send();
  });
}


get('/books.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.log("Failed!", error);
});
