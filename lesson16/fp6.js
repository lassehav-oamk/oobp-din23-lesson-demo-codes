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

/*
Convert users array from Exercise 1 to a new array, which has id property for each element in the array.
The value of the id property should be the index number of the element in the array. 
Use map method (see documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 
The output should be the following: 

[ 
  { name: 'John', age: 33, id: 0 }, 
  { name: 'Maxine', age: 24, id: 1 }, 
  { name: 'Ted', age: 12, id: 2 } 
] 
*/

const outputArray = users.map((element, index) => {
  //console.log(index);
  let newElement = {
    id: index,
    ...element
  }
  return newElement;
})

console.log(outputArray);