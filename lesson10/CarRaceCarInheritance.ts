class Car {
  #brand: string;
  #registration: string;
  #speed : number;

  constructor(brand: string, registration: string) {
    this.#speed = 0;
    this.#brand = brand;
    this.#registration = registration;
  }

  increaseSpeed() {
    this.#speed = this.#speed + 5;
  }

  displaySpeed() {
    console.log(`The ${this.#brand} ${this.#registration} is going ${this.#speed} km/h`);
  }

  getSpeed() {
    return this.#speed;
  }

  setSpeed(speed: number) {
    this.#speed = speed;
  }
}

class RaceCar extends Car {
  constructor(brand: string, registration: string) {
    super(brand, registration);
  }

  increaseSpeed(): void {
    this.setSpeed(this.getSpeed() + 10);
  }

  makeNoise(): void {
    console.log('VROOM VROOM');
  }  
}

let myCar = new Car("Toyota", "ABC-123");
myCar.displaySpeed();

let myRaceCar = new RaceCar("Ferrari", "XYZ-987");
myRaceCar.displaySpeed();


myCar.increaseSpeed();
myRaceCar.increaseSpeed();

myCar.displaySpeed();
myRaceCar.displaySpeed();

myCar.makeNoise();
myRaceCar.makeNoise();
