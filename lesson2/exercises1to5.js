/* Exercise 1 */
/* data of Belgium
    Country			Belgium 
    Capital			Brussels 
    Languages		Dutch, French, German 
    Area			30689 km2 
    Population		11492641 
    GDP per capita		$50114 
    ISO3166 code		BE 
 */
let belgium = {
  name: "Belgium",
  capital: "Brussels",
  languages: ["Dutch", "French", "German"],
  area: 30689,
  population: 11492641,
  gdpPerCapita: 50114,
  iso3166Code: "BE",
};

/* Exercise 2 */
/* data of Germany
    Country			Germany
    Capital			Berlin
    Languages		German
    Area			357114 km2
    Population		83019200
    GDP per capita		$52541
    ISO3166 code		DE
 */
let germany = {
  name: "Germany",
  capital: "Berlin",
  languages: ["German"],
  area: 357114,
  population: 83019200,
  gdpPerCapita: 52541,
  iso3166Code: "DE",
};

function printCountryNameAndPop(country) {
  console.log(country.name + ", population " + country.population);
}

printCountryNameAndPop(belgium);
printCountryNameAndPop(germany);

/* Exercise 3 */
// Initialize sweden object
let sweden = {
  name: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: 450295,
  population: 10302731,
  gdpPerCapita: 50579,
  iso3166Code: "SE",
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
};

let arrayOfCountries = [belgium, germany, france, sweden, china];
function printCountryWithMaximumPopulation(arrayOfCountries) {
  let countryWithMaxPopulation = arrayOfCountries[0];

  for (let i = 0; i < arrayOfCountries.length; i++) {
    let currentCountry = arrayOfCountries[i];

    if (currentCountry.population > countryWithMaxPopulation.population) {
      countryWithMaxPopulation = currentCountry;
    }
  }

  console.log(
    "Country with maximum population is " + countryWithMaxPopulation.name
  );
}

printCountryWithMaximumPopulation(arrayOfCountries);

// Exercise 4
function getPopulationSumOfCountries(arrayOfCountries) {
  let totalPopulation = 0;
  for (let i = 0; i < arrayOfCountries.length; i++) {
    totalPopulation += arrayOfCountries[i].population;
  }
  return totalPopulation;
}

console.log(
  "Exercise 4: Total population of countries in the array is " +
    getPopulationSumOfCountries(arrayOfCountries)
);

/* Exercise 5 */
/* the desired output ['BE', 'DE', 'SW', 'CN'] */
function getCountryCodes(countries) {
  let resultArrayOfCountryCodes = [];

  for (let i = 0; i < countries.length; i++) {
    let currentCountryCode = countries[i].iso3166Code;
    console.log(currentCountryCode);
    resultArrayOfCountryCodes.push(currentCountryCode);
  }

  return resultArrayOfCountryCodes;
}

console.log("Exercise 5");
let countryCodes = getCountryCodes(arrayOfCountries);
console.log("Exercise 5 result is " + countryCodes);
