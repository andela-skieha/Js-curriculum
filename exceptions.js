function getMonthName(mo) {
  mo = mo - 1;
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo";
  }
}

try {
  monthName = getMonthName(myMonth)
} catch (e) {
  monthName = "unknown";
  // logMyErrors(e);
}

console.log(getMonthName(1));
console.log(getMonthName(23));
