// while executes its statements as long as a specified condition evaluates to true
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n, x);
}

/* Make sure the condition in a loop eventually evaluates to false, or the loop
   will be infinite. The following is an example of an infinite loop.
*/
while (true) {
  console.log("Hello World");
}
