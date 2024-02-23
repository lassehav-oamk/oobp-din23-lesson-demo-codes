class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item !== product);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

class Product {
  #id;
  #name;
  #price;
  #quantity;

  constructor(id, name, price, quantity) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  increaseQuantity() {
    this.#quantity++;
  }

  decreaseQuantity() {
    this.#quantity--;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get quantity() {
    return this.#quantity;
  }

  get price() {
    return this.#price;
  }

  getTotalPrice() {
    return this.#price * this.#quantity;
  }

  setQuantity(quantity) {
    this.#quantity = quantity;
  }
}

const cart = new ShoppingCart();

function getAndCreateProductElements() {
  console.log("getAndCreateProductElements");

  // read the searchQuery from the input element
  const searchQuery = document.querySelector("input#searchQuery").value;
  console.log(searchQuery);

  // step 0 add this function to the event listener of the button

  // step 1 send fetch request to dummyJSON
  fetch("https://dummyjson.com/products/search?q=" + searchQuery)
    // step 2 receive the response and convert it to JSON
    .then((response) => response.json())
    .then((responseData) => {
      // clear the previous search results
      const productDataTarget = document.querySelector("div#productDataTarget");
      //productDataTarget.innerHTML = "";
      if (productDataTarget.firstChild) {
        productDataTarget.removeChild(productDataTarget.firstChild);
      }

      console.log(responseData);
      // step 3 create the product list with the code below adapted to the JSON data
      // create product list div
      const productList = document.createElement("div");
      productList.className = "productList";

      for (let i = 0; i < responseData.products.length; i++) {
        let productCard = createProductCard(
          responseData.products[i].id,
          responseData.products[i].title,
          responseData.products[i].thumbnail,
          responseData.products[i].description,
          parseFloat(responseData.products[i].price)
        );

        // add the product card to the product list
        productList.appendChild(productCard);
      }

      //add the product list to the body
      document.querySelector("div#productDataTarget").appendChild(productList);
    });
}

function createProductCard(
  productId,
  productName,
  productImage,
  productDescription1,
  productPrice
) {
  const productCardDiv = document.createElement("div");
  productCardDiv.classList.add("productCard");

  const img = document.createElement("img");
  img.src = productImage;

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("productInfo");

  const h1ProductTitle = document.createElement("h1");
  h1ProductTitle.innerText = productName;

  const h2ProductDescription1 = document.createElement("h2");
  h2ProductDescription1.innerText = productDescription1;

  const h2ProductDescription2 = document.createElement("h2");
  h2ProductDescription2.innerText = productPrice + "€";

  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Add to Cart";
  addToCartButton.addEventListener("click", function () {
    console.log("Add to Cart button clicked for " + productName);
    const product = new Product(productId, productName, productPrice, 1);
    cart.addItem(product);
  });

  productCardDiv.appendChild(img);
  productCardDiv.appendChild(productInfoDiv);
  productInfoDiv.appendChild(h1ProductTitle);
  productInfoDiv.appendChild(h2ProductDescription1);
  productInfoDiv.appendChild(h2ProductDescription2);
  productInfoDiv.appendChild(addToCartButton);

  return productCardDiv;
}

function openShoppingCart() {
  const uiContentElement = document.querySelector("div#uiContent");
  uiContentElement.innerHTML = "";

  const shoppingCartTable = document.createElement("table");
  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");
  const itemNameTh = document.createElement("th");
  const itemPriceTh = document.createElement("th");
  const itemQuantityTh = document.createElement("th");
  const itemTotalPriceTh = document.createElement("th");

  itemNameTh.innerText = "Name";
  itemPriceTh.innerText = "Price";
  itemQuantityTh.innerText = "Quantity";
  itemTotalPriceTh.innerText = "Total Price";

  shoppingCartTable.appendChild(thead);
  thead.appendChild(theadRow);
  theadRow.appendChild(itemNameTh);
  theadRow.appendChild(itemPriceTh);
  theadRow.appendChild(itemQuantityTh);
  theadRow.appendChild(itemTotalPriceTh);

  const tbody = document.createElement("tbody");

  const cartItems = cart.getItems();
  for (let i = 0; i < cartItems.length; i++) {
    const row = document.createElement("tr");

    const itemNameTd = document.createElement("td");
    const itemPriceTd = document.createElement("td");
    const itemQuantityTd = document.createElement("td");
    const itemTotalPriceTd = document.createElement("td");

    itemNameTd.innerText = cartItems[i].name;
    itemPriceTd.innerText = cartItems[i].price;
    //itemQuantityTd.innerText = cartItems[i].quantity;
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = cartItems[i].quantity;
    itemQuantityTd.appendChild(quantityInput);

    itemTotalPriceTd.innerText = cartItems[i].getTotalPrice();

    row.appendChild(itemNameTd);
    row.appendChild(itemPriceTd);
    row.appendChild(itemQuantityTd);
    row.appendChild(itemTotalPriceTd);

    tbody.appendChild(row);

    // add event handlers
    quantityInput.addEventListener("change", function () {
      console.log("quantity changed");
      console.log(quantityInput.value);
      cartItems[i].setQuantity(parseInt(quantityInput.value));
      console.log(
        "current total price of item " + cartItems[i].getTotalPrice()
      );
      itemTotalPriceTd.innerText = cartItems[i].getTotalPrice();
    });
  }

  shoppingCartTable.appendChild(tbody);

  uiContentElement.appendChild(shoppingCartTable);
}
