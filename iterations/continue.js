// can be used to restart a while, do-while, for, or label statement

// using continue with a while loop
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}

// using continue with a label statement
var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + " is odd.");
      }
      console.log("i = " + i);
      console.log("j = " + j);
  }
