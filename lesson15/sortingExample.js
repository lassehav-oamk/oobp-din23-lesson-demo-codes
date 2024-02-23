let randomArray = [1, 5, 3, 2, 4];

console.log(randomArray.sort());

let randomArrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 20 },
  { name: "Jill", age: 35 },
];

console.log(
  randomArrayOfObjects.sort(function (a, b) {
    // we must return number negative if a is less than b,
    if (a.age < b.age) {
      return -1;
    }

    //positive if a is greater than b,
    if (a.age > b.age) {
      return 1;
    }

    //and zero if they are equal.
    if (a.age === b.age) {
      return 0;
    }
  })
);
