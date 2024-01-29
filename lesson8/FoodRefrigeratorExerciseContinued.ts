
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

  getQuantity() {
    return this.#quantity;
  }

  getName() {
    return this.#typeOfFood;
  }
}


class Refrigerator {

  #storage : Food[];

  constructor() {
    this.#storage = [];
  }

  putFood(food : Food) {
    this.#storage.push(food)
  }

  /*
    Prints the contents in the following format:
    ----------- 
    | Apple 2 
    | Banana 3 
    ----------- 
  */
  getContents() {
    console.log('-----------');
    for(let i = 0; i < this.#storage.length; i++) {
      console.log(`| ${this.#storage[i].getName()} ${this.#storage[i].getQuantity()}`)
    }
    console.log('-----------');
  }

  getAndEatFood(nameOfFood : string) {
    let foundFood : Food | undefined = undefined;

    // Find food which has the same name as nameOfFood from our storage
    for(let i = 0; i < this.#storage.length; i++) {
      if(nameOfFood === this.#storage[i].getName()) {
        foundFood = this.#storage[i];
        break;
      }
    }

    if(foundFood == undefined) {
      console.log('Sorry, no such food in this refrigerator!');
      return;
    }

    // Consume the food
    foundFood.eatOne();

  }
}


let r = new Refrigerator(); 
let apple = new Food('Apple', 2); 
let bananas = new Food('Banana', 3); 
r.putFood(apple); 
r.putFood(bananas); 
r.getContents(); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Banana'); 
r.getAndEatFood('Apple'); 
r.getContents();  