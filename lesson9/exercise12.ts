const meteoriteDataset = require('./y77d-th95.json');

interface Meteorite {
  name : string;
  id : string;
  nametype : string;
  recclass : string;
  mass : string;
  fall : string;
  year : string;
  reclat : string;
  reclong : string;
  geolocation : {
    type : string;
    coordinates : number[];
  }
}


function getRandomMeteorite(data : Meteorite[]) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

const randomMeteorite = getRandomMeteorite(meteoriteDataset);

console.log(randomMeteorite.name + " " + randomMeteorite.mass + " " + randomMeteorite.year.slice(0,4));


