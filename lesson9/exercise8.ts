const meteoriteDataset = require('./y77d-th95.json');

// Create a function, which prints the names of all meteorites. 
function printMeteoriteNames(data : any) {
  for(let i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
}

printMeteoriteNames(meteoriteDataset);

