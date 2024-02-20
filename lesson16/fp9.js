
function getMeteorites() {
  // step 1 get the element where the mass has been typed
  const inputElement = document.querySelector('#mass');

  // step 2 read the mass value
  const mass = inputElement.value;
  console.log(mass);

  // step 3 filter the meteorites
  const results = meteorites.filter(m => parseInt(m.mass) < mass);

  // step 3.5 sort the results by mass
  results.sort((aMeteorite, bMeteorite) => parseInt(aMeteorite.mass) - parseInt(bMeteorite.mass));

  // step 4 display the meteorites by creating new tr elements for each meteorite
  const resultsDomElements = results.map(meteorite => {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const massTd = document.createElement('td');

    nameTd.textContent = meteorite.name;
    massTd.textContent = meteorite.mass;

    tr.appendChild(nameTd);
    tr.appendChild(massTd);

    return tr;
  })

  // step 5 add the created tr elements to the table
  const tableBody = document.querySelector('table tbody');
  for(let i = 0; i < resultsDomElements.length; i++) {
    tableBody.appendChild(resultsDomElements[i]);
  }

  // step update the total number of matches
  let countSpan = document.querySelector('#count');
  countSpan.textContent = results.length;
}