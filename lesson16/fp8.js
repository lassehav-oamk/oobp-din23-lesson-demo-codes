const meteorites = require('./meteoriteDataset.json');

// now I can use meteorites array 
// convert it to a new array, which contains only 
// meteorites which have mass less than 100. Use filter method of an array. 

function getMeteoritesWithMassLessThan(meteorites, mass) {
  return meteorites.filter(m => m.mass < mass);
}

console.log(getMeteoritesWithMassLessThan(meteorites, 100));