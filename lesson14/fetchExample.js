function getAndCreateProductElements() {
  console.log('getAndCreateProductElements');

  // step 0 add this function to the event listener of the button

  // step 1 send fetch request to dummyJSON

  // step 2 receive the response and convert it to JSON

  // step 3 create the product list with the code below adapted to the JSON data

  // create product list div
  // const productList = document.createElement('div');
  // productList.className = 'productList';

  // for(let i = 0; i < cameraData.length; i++) {
  //   let productCard = createProductCard(
  //     cameraData[i].model,
  //     cameraData[i].image,
  //     cameraData[i].highlights[0] + ', ' + cameraData[i].highlights[1] + ', ' + cameraData[i].highlights[2],
  //     cameraData[i].highlights[3] + ', ' + cameraData[i].highlights[4]);

  //   // add the product card to the product list
  //   productList.appendChild(productCard);
  // }   
  
  // // add the product list to the body
  // document.querySelector('body').appendChild(productList);
}

function createProductCard(productName, productImage, productDescription1, productDescription2){        
  const productCardDiv = document.createElement('div');
  productCardDiv.classList.add('productCard');

  const img = document.createElement('img');
  img.src = productImage;

  const productInfoDiv = document.createElement('div');
  productInfoDiv.classList.add('productInfo');

  const h1ProductTitle = document.createElement('h1');
  h1ProductTitle.innerText = productName;

  const h2ProductDescription1 = document.createElement('h2');
  h2ProductDescription1.innerText = productDescription1;

  const h2ProductDescription2 = document.createElement('h2');
  h2ProductDescription2.innerText = productDescription2;
  
  productCardDiv.appendChild(img);
  productCardDiv.appendChild(productInfoDiv);
  productInfoDiv.appendChild(h1ProductTitle);
  productInfoDiv.appendChild(h2ProductDescription1);
  productInfoDiv.appendChild(h2ProductDescription2);  
  
  return productCardDiv;
}