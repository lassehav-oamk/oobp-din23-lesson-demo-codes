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
Convert users array from Exercise 1 to a new array, where the name properties contain the original names
(first names) and “Bundy” as last name. Use map method. 

The result should be the following: 

[ 
  { name: 'John Bundy', age: 33 }, 
  { name: 'Maxine Bundy', age: 24 }, 
  { name: 'Ted Bundy', age: 12 } 
] 
*/
  
const outputArray = users.map(element => {
  return {
    name: element.name + ' Bundy',
    age: element.age
  }
});

// same with for loop
let outputArray2 = [];
for(let i = 0; i < users.length; i++) {
  let element = users[i];
  let newElement = {
    name: element.name + ' Bundy',
    age: element.age
  }
  outputArray2.push(newElement);
}

console.log(outputArray);