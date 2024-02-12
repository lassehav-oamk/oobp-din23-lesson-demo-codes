function Car(brand, registration) {
  this.brand = brand;
  this.speed = 0;
}

Car.prototype.increaseSpeed = function() {
  this.speed += 5;
}

Car.prototype.displaySpeed = function() {
  console.log(this.registration + ", speed: " + this.speed)
}

let car = new Car('Toyota');

let car2 = {
  brand: "Toyota",
  speed: 0
}


function FastCar(type, brand, registration ) {
  this.registration = registration;
  this.brand = brand;
  this.speed = 0;
  this.type = type;
}

// inherit Car
FastCar.prototype = Object.create(Car.prototype);
FastCar.prototype.constructor = FastCar;

// Introduce a new method
FastCar.prototype.makeNoise = function() {
  console.log('Brrum brrum');
}

// Replace or overload a method
FastCar.prototype.increaseSpeed = function() {
  this.speed += 10;
}

let formula = new FastCar("F1", "Ferrari", "FAST-1");
console.log(formula);
formula.makeNoise(); 
formula.displaySpeed(); 
formula.increaseSpeed(); 
formula.displaySpeed(); 