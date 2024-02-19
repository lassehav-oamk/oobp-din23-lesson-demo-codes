const users = [
  { 
    name:"John", 
    age: 33 
  }, 
  { 
    name:"Maxine", 
    age: 24 
  }, 
  { 
    name:"Ted", 
    age: 12 
  }, 
];

// task is to convert the users array to an array, which has only the ages of the users
// Array.map is the perfect solution

const output = users.map(function (element, index, array) {
  // console.log('index: ' + index);
  // console.log(element);
  // console.log(array);
  return element.age;
});
console.log(output);

// task is add a new property for every elmeent in the users array, the property
// indicats if the user is an adult
const output2 = users.map(function (element) {
  let isAdult = false;
  if(element.age >= 18) {
    isAdult = true;
  }

  element.isAdult = isAdult;
  return element;
})

console.log(output2);