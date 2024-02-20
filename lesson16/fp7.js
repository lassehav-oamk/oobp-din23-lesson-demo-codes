const meteorites = require('./meteoriteDataset.json');

// now I can use meteorites array 
// convert it to a new array, which contains only 
// meteorites which have mass less than 100. Use filter method of an array. 

const outputMeteorites = meteorites.filter(m => m.mass < 100);
console.log(outputMeteorites);