// using prototypes to create objects
function Fruit() {

}
Fruit.prototype.colour = "Yellow";
Fruit.prototype.sweetness = 5;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function () {
  console.log("This is a " + this.fruitName);
};

Fruit.prototype.nativeTo = function () {
  console.log("Grown in " + this.nativeToLand);
};

// calling the Fruit constructor in the prototype pattern
var mangoFruit = new Fruit();
mangoFruit.showName();
mangoFruit.nativeTo();
