function Box(width, height, depth) {
  this.width = width;
  this.height = height;
  this.depth = depth;
}

Box.prototype.volume = function () {
  return this.width * this.height * this.depth;
};

let box = new Box(10, 20, 30);

console.log(box.volume());

console.log(Object.getPrototypeOf(box));
console.log(box.__proto__);

console.log(box.__proto__ === Object.getPrototypeOf(box));

class Box2 {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  volume() {
    return this.width * this.height * this.depth;
  }
}

let box2 = new Box2(10, 20, 30);
console.log(box2.volume());
