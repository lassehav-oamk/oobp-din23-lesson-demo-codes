
class Food {
  #typeOfFood : string;
  #quantity : number;

  constructor(typeOfFood : string, quantity : number) {
    this.#typeOfFood = typeOfFood;
    this.#quantity = quantity;
  }

  whatIsThis() {
    console.log(this.#typeOfFood);
  }

  eatOne() {
    if(this.#quantity > 0) {
      this.#quantity = this.#quantity - 1;
      console.log(`Slurp! One ${this.#typeOfFood.toLowerCase()} eaten. ${this.#quantity} remaining `)
    } else {
      console.log(`Sorry, no more ${this.#typeOfFood.toLowerCase()}s remaining! `)
    }
  }
}




let banana = new Food('Banana',4); 
banana.whatIsThis(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 