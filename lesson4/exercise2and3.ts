interface Country {
  name: string;
  capital: string;
  languages: string[];
  area: number;
  population: number; 
  gdpPerCapita: number;
  iso3166Code: string;
}

const belgium = {
  name: "Belgium",
  capital: "Brussels",
  languages: ["Dutch", "French", "German"],
  area: 30689,
  population: 11492641,
  gdpPerCapita: 50114,
  iso3166Code: "BE",
};

let china = {
  name: "China",
  capital: "Beijing",
  languages: ["Chinese"],
  area: 9596960,
  population: 1403500365,
  gdpPerCapita: 16624,
  iso3166Code: "CN",
};

let arrayOfCountries : Country[] = [belgium, china];

function printCountryNameAndPop(country : Country) : void {
  console.log(country.name + ", population " + country.population);
}


function printCountryWithMaximumPopulation(arrayOfCountries : Country[]) : Country {
  let countryWithMaxPopulation : Country = arrayOfCountries[0];

  for (let i = 0; i < arrayOfCountries.length; i++) {
    let currentCountry = arrayOfCountries[i];

    if (currentCountry.population > countryWithMaxPopulation.population) {
      countryWithMaxPopulation = currentCountry;
    }
  }

  console.log(
    "Country with maximum population is " + countryWithMaxPopulation.name
  );

  return countryWithMaxPopulation;
}

printCountryWithMaximumPopulation(arrayOfCountries);