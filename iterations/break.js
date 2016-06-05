// used to terminate a loop, a switch, or together with a label statement.

// breaking to a loop termination
var a = [23, 45, 67, 89];
for (var i = 0; i < a.length; i++) {
  if (a[i] == 67) {
    console.log("We found it");
    break;
  }
}

// breaking to a label
var x = 0;
var z = 0;
labelCancelLoops:
  while (true) {
    console.log("Outer loops: " + x);
    x += 1;
    z = 1;
    while (true) {
      console.log("Inner loops: " + z);
      z += 1;
      if (z === 10 && x === 10) {
        break labelCancelLoops;
      } else if (z === 10) {
        break;
      }
    }
  }
