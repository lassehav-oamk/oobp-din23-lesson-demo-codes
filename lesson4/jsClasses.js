// here we can define a constructor function for car objects
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.numWheels = 4;
  this.isRunning = false;

  // add methods to the constructor function
  this.turnOn = function () {
    this.isRunning = true;
  };
}

// and use it to make cars!
let toyota = new Car("Toyota", "Camry", 2020, "black");
let mercedes = new Car("Mercedes", "C-Class", 2019, "white");

console.log(toyota);
console.log(mercedes);
console.log("starting toyota...");
toyota.turnOn();
console.log("toyota has started");
console.log(toyota);
console.log(mercedes);
