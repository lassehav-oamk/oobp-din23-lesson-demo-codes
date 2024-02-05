let a = [1, 2, 5, 7];

let b = new Array(5, 2, 1, 7);

console.log(a);
console.log(b);

console.log(Object.getPrototypeOf(a) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

