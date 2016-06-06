// using constructors to create objects
function Fruit(theColour, theSweetness, theFruitName, theNativeToLand) {

  this.colour = theColour;
  this.sweetness = theSweetness;
  this.fruitName = theFruitName;
  this.nativeToLand = theNativeToLand;

  this.showName = function () {
    console.log("This is a " + this.fruitName);
  };

  this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry) {
      console.log("Grown in " + eachCountry);
    });
  };
}

// This creates a new instance of the fruit object
var mango = new Fruit("Yellow", 8, "Mango", ["south America", "west africa"]);
mango.showName();
mango.nativeTo();

var orange = new Fruit();
orange.mangoSpice = "some value";
console.log(orange.mangoSpice);

orange.printStuff = function () {
  console.log("Printing"); 
};
orange.printStuff();
