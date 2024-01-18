let sweden = {
  name: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: 450295,
  population: 10302731,
  gdpPerCapita: 50579,
  iso3166Code: "SE",
  largestCities: [
    { name: "Stockholm", population: 1515017 },
    { name: "Gothenburg", population: 572799 },
    { name: "Malmö", population: 312012 },
    { name: "Uppsala", population: 140454 },
    { name: "Västerås", population: 110877 },
  ],
};

// Initialize france object
let france = {
  name: "France",
  capital: "Paris",
  languages: ["French"],
  area: 640679,
  population: 67158000,
  gdpPerCapita: 43551,
  iso3166Code: "FR",
  largestCities: [
    { name: "Paris", population: 2140526 },
    { name: "Marseille", population: 855393 },
    { name: "Lyon", population: 513275 },
    { name: "Toulouse", population: 479553 },
    { name: "Nice", population: 340017 },
  ],
};

// Initialize china object
let china = {
  name: "China",
  capital: "Beijing",
  languages: ["Chinese"],
  area: 9596960,
  population: 1403500365,
  gdpPerCapita: 16624,
  iso3166Code: "CN",
  largestCities: [
    { name: "Shanghai", population: 24183300 },
    { name: "Beijing", population: 20794100 },
    { name: "Chongqing", population: 15376000 },
    { name: "Tianjin", population: 12938224 },
    { name: "Guangzhou", population: 12702800 },
  ],
};

let arrayOfCountries = [france, sweden, china];

/* Print out for each country in countries array:
    the name of the country,  
    the total population of the country,  
    the names of the five biggest cities in the country and their population , 
    the total sum of population in the five biggest cities  
    the percentage of the population in those cities out of the total population in the country.
    */
function printCountryData(countries) {
  countries.forEach((currentCountry) => {
    console.log("Country name: " + currentCountry.name);
    console.log("Population: " + currentCountry.population);
    console.log("Names of five biggest cities and population: ");
    let sumOfPopulationInBiggestCities = 0;
    currentCountry.largestCities.forEach((currentCity, index) => {
      console.log(
        `${index + 1}. ${currentCity.name}, population is: ${
          currentCity.population
        }`
      );
      sumOfPopulationInBiggestCities += currentCity.population;
    });
    console.log(
      "Sum of population in five biggest cities: " +
        sumOfPopulationInBiggestCities
    );
    let percentageOfPopInFiveCitiesToCountryPop =
      (sumOfPopulationInBiggestCities / currentCountry.population) * 100;
    console.log(
      "Percentage of pop in five biggest cities: " +
        percentageOfPopInFiveCitiesToCountryPop
    );
    console.log("\n");
  });
}

/* Same function as printCountryData, but using for loop instead of forEach */
function printCountryDataUsingForLoop(countries) {
  for (let i = 0; i < countries.length; i++) {
    let currentCountry = countries[i];
    console.log("Country name: " + currentCountry.name);
    console.log("Population: " + currentCountry.population);
    console.log("Names of five biggest cities and population: ");
    let sumOfPopulationInBiggestCities = 0;
    for (let j = 0; j < currentCountry.largestCities.length; j++) {
      let currentCity = currentCountry.largestCities[j];
      console.log(
        `${j + 1}. ${currentCity.name}, population is: ${
          currentCity.population
        }`
      );
      sumOfPopulationInBiggestCities += currentCity.population;
    }
    console.log(
      "Sum of population in five biggest cities: " +
        sumOfPopulationInBiggestCities
    );
    let percentageOfPopInFiveCitiesToCountryPop =
      (sumOfPopulationInBiggestCities / currentCountry.population) * 100;
    console.log(
      "Percentage of pop in five biggest cities: " +
        percentageOfPopInFiveCitiesToCountryPop
    );
    console.log("\n");
  }
}

printCountryData(arrayOfCountries);
