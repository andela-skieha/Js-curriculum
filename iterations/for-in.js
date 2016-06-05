// iterates a specified variable over all enumerable properites of an object

function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "[" + i + "]" + " = " + obj[i] + " ";
  }
  return result;
}

console.log(dump_props(["mum", "dad", "brown", "bag", 34], "arr"));
console.log(dump_props({"name": "Njerry", "age": 22, "height": "5'7"}, "person"));
