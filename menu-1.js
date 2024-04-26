const products = [
  {
    index: 0,
    hit: true,
    new: true,
    imageSrc: "./img-3/roll1.svg",
    sharp: true,
    vegan: true,
    lactoseFree: true,
    title: "Гункан лосось",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 1,
    hit: false,
    new: true,
    imageSrc: "./img-3/roll2.svg",
    sharp: true,
    vegan: false,
    lactoseFree: false,
    title: "Гункан креветка",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 2,
    hit: true,
    new: false,
    imageSrc: "./img-3/roll3.svg",
    sharp: false,
    vegan: true,
    lactoseFree: true,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 3,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll4.svg",
    sharp: false,
    vegan: false,
    lactoseFree: true,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 4,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll5.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан с тунцом и трюфелем",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 5,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll6.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан тунец спайси",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 6,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll7.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 7,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll8.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Нигири тунец",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 8,
    hit: true,
    new: true,
    imageSrc: "./img-3/roll1.svg",
    sharp: true,
    vegan: true,
    lactoseFree: true,
    title: "Гункан лосось",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 9,
    hit: false,
    new: true,
    imageSrc: "./img-3/roll2.svg",
    sharp: true,
    vegan: false,
    lactoseFree: false,
    title: "Гункан креветка",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 10,
    hit: true,
    new: false,
    imageSrc: "./img-3/roll3.svg",
    sharp: false,
    vegan: true,
    lactoseFree: true,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 11,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll4.svg",
    sharp: false,
    vegan: false,
    lactoseFree: true,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 12,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll5.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан с тунцом и трюфелем",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 13,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll6.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан тунец спайси",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 14,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll7.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 15,
    hit: false,
    new: false,
    imageSrc: "./img-3/roll8.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Нигири тунец",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
];
function createProductCards() {
  for (let i = 0; i < products.length; i++) {
    const divCard = document.createElement("div");
    divCard.id = "card" + i;
    divCard.className = "card";
    divCard.innerHTML = `<div class="cardHeader" id="cardHeader${+i}">
                            <div class="divlabels" id="divlabels${i}"></div>
                            <img src="${products[i].imageSrc}">
                          </div>
                          <div class="cardMain" id="cardMain${+i}">
                            <div class="divIcons" id="divIcons${i}"></div>
                            <h2 class="prooductTitle">${products[i].title}</h2>
                            <span class="weightCard">${
                              products[i].weight
                            }</span>
                            <div class="descriptionCard">${
                              products[i].description
                            }</div>
                          </div>
                          <div class="footerCard" id="footerCard${i}">
                            <span class="priceCard">${
                              products[i].price + " " + products[i].currency
                            }</span>
                            <div class="likeBlock" id="likeBlock${i}"><img src="./img-3/likeImg.svg"></div>
                            <div class="addBlock" id="addBlock${i}"><img src='./img-3/addImg.svg'></div>
                          </div>`;
    if (i < 8) document.getElementById("conteiner-1").appendChild(divCard);
    else if(i >= 8 || i < 16) document.getElementById("conteiner-2").appendChild(divCard);
    else document.getElementById("conteiner-3").appendChild(divCard);
    const divlabels = document.getElementById("divlabels" + i);

    if (products[i].hit == true) {
      divlabels.innerHTML += '<div class="hitBlock">Hit</div>';
    }
    if (products[i].new == true) {
      divlabels.innerHTML += '<div class="newBlock">New</div>';
    }

    const divIcons = document.getElementById("divIcons" + i);

    if (products[i].sharp == true) {
      divIcons.innerHTML += `<img src="./img-3/sharpIcon.svg">`;
    }
    if (products[i].vegan == true) {
      divIcons.innerHTML += `<img src="./img-3/veganIcon.svg">`;
    }
    if (products[i].lactoseFree == true) {
      divIcons.innerHTML += `<img src="./img-3/lactoseFreeIcon.svg">`;
    }
  }
}
createProductCards();

const basketBlock = document.getElementById("basketBlock");

const openBasket = document.getElementById("openBasket");
openBasket.addEventListener("click", () => {
  basketBlock.style.display = "flex";
  setTimeout(() => {
    basketBlock.style.opacity = "1";
  }, 100);
});

const closeBasket = document.getElementById("closeBasket");
closeBasket.addEventListener("click", () => {
  basketBlock.style.opacity = "0";
  setTimeout(() => {
    basketBlock.style.display = "none";
  }, 100);
});

const basket = document.getElementById("basket");

const emptyBasketImg = document.getElementById("emptyBasketImg");
const emptyBasketH2 = document.getElementById("emptyBasketH2");
const emptyBasketSpan = document.getElementById("emptyBasketSpan");

const basketProducts = [];

let cardId;
let productIndex;
function removeEmptyBasket() {
  if (basketProducts.length > 0) {
    emptyBasketImg.style.display = "none";
    emptyBasketH2.style.display = "none";
    emptyBasketSpan.style.display = "none";
    basket.style.justifyContent = "start";
  } else {
    emptyBasketImg.style.display = "block";
    emptyBasketH2.style.display = "block";
    emptyBasketSpan.style.display = "block";
    basket.style.justifyContent = "center";
  }
}
function getTotalPrice() {
  const totalBasket = document.getElementById("totalBasket");
  const totalBasketPrice = document.getElementById("totalBasketPrice");
  const placeAnOrderBtn = document.getElementById("placeAnOrderBtn");
  if (basketProducts.length > 0) {
    totalBasket.style.display = "block";
    totalBasketPrice.style.display = "block";
    placeAnOrderBtn.style.display = "block";

    let totalPriceNum = 0;
    for (let i = 0; i < basketProducts.length; i++) {
      totalPriceNum += basketProducts[i].price * basketProducts[i].quantity;
    }
    totalBasketPrice.innerHTML = totalPriceNum + " " + products[0].currency;
  } else {
    totalBasket.style.display = "none";
    totalBasketPrice.style.display = "none";
    placeAnOrderBtn.style.display = "none";
  }
}

const cards = document.querySelectorAll(".card");
cards.forEach((elem) => {
  const cardBtn = elem.childNodes[4].childNodes[5];
  cardBtn.addEventListener("click", () => {
    cardId = cardBtn.id.substring(8, 10);
    console.log(cardId);
    if (!products[cardId].basket) {
      productIndex = basketProducts.length;
      basketProducts.push(products[cardId]);
      removeEmptyBasket();
      getTotalPrice();
    }
    createBasketCard();
  });
});

function createBasketCard() {
  for (let i = 0; i < basketProducts.length; i++) {
    if (!products[cardId].basket) {
      const basketCard = document.createElement("div");
      basketCard.className = "basketCard";
      basketCard.id = "basketCard" + productIndex;
      basketCard.innerHTML = `<div class="crossBlock" id="crossBlock${productIndex}">
                                <img src="./img-3/crossImg.svg" class="crossImg" id="crossBlock${productIndex}">
                              </div>
                              <img src="${
                                basketProducts[productIndex].imageSrc
                              }" class="basketCardImg" id="basketCardImg${
        basketProducts[productIndex].index
      }">
                              <div class"basketTitleBlock">
                                <div class"basketRollTitle">${
                                  basketProducts[productIndex].title
                                }</div>
                                <div class="basketRollWeight">${
                                  basketProducts[productIndex].weight
                                }</div>
                              </div>
                              <div class="basketPriceBlock">
                                <div class="basketRollPrice">${
                                  basketProducts[productIndex].price +
                                  " " +
                                  basketProducts[productIndex].currency
                                }</div>
                                <div class="minusBlock" id="minusBlock${productIndex}"><img src="./img-3/minusImg.svg" id="minusBlock${productIndex}" class="minusImg"></div>
                                <div class="quantity" id="quantity${productIndex}">${
        basketProducts[productIndex].quantity
      }</div>
                                <div class="plusBlock" id="plusBlock${productIndex}"><img src="./img-3/plusImg.svg" id="plusBlock${productIndex}" class="plusImg"></div>
                              </div>`;
      document.getElementById("basket").appendChild(basketCard);
      products[cardId].basket = true;
    }
  }
}
function UpdateIdBacket() {
  const allBasketCard = document.querySelectorAll(".basketCard");
  const allQuantity = document.querySelectorAll(".quantity");
  const allplusQuantity = document.querySelectorAll(".plusBlock");
  const allplusImg = document.querySelectorAll(".plusImg");
  const allminusQuantity = document.querySelectorAll(".minusBlock");
  const allminusImg = document.querySelectorAll(".minusImg");
  const allcrossBlock = document.querySelectorAll(".crossBlock");
  const allcrossImg = document.querySelectorAll(".crossImg");
  for (let i = 0; i < basketProducts.length; i++) {
    allBasketCard[i].id = "basketCard" + i;
    allQuantity[i].id = "quantity" + i;
    allplusQuantity[i].id = "plusQuantity" + i;
    allplusImg[i].id = "plusQuantity" + i;
    allminusQuantity[i].id = "minusQuantity" + i;
    allminusImg[i].id = "minusQuantity" + i;
    allcrossBlock[i].id = "crossBlock" + i;
    allcrossImg[i].id = "crossBlock" + i;
  }
}

document.getElementById("basket").addEventListener("click", (event) => {
  const idPlusBlock = event.srcElement.id.substring(9, 11);

  const quantity = document.getElementById("quantity" + idPlusBlock);
  if (
    event.target.classList.contains("plusBlock") ||
    event.target.classList.contains("plusImg")
  ) {
    basketProducts[idPlusBlock].quantity++;
    quantity.innerHTML = basketProducts[idPlusBlock].quantity;
    getTotalPrice();
  }
});
document.getElementById("basket").addEventListener("click", (event) => {
  const idMinusBlock = event.srcElement.id.substring(10, 12);
  const quantity = document.getElementById("quantity" + idMinusBlock);
  if (
    event.target.classList.contains("minusBlock") ||
    event.target.classList.contains("minusImg")
  ) {
    if (basketProducts[idMinusBlock].quantity > 1) {
      basketProducts[idMinusBlock].quantity--;
      quantity.innerHTML = basketProducts[idMinusBlock].quantity;
      getTotalPrice();
    }
  }
});

document.getElementById("basket").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("crossBlock") ||
    event.target.classList.contains("crossImg")
  ) {
    const idCrossBlock = event.srcElement.id.substring(10, 12);
    const basketCard = document.getElementById("basketCard" + idCrossBlock);
    const basketCardImgId = document.querySelectorAll(".basketCardImg");
    products[basketCardImgId[idCrossBlock].id.substring(13, 15)].basket = false;
    products[basketCardImgId[idCrossBlock].id.substring(13, 15)].quantity = 1;
    basketProducts.splice(idCrossBlock, 1);
    basket.removeChild(basketCard);
    UpdateIdBacket();
    removeEmptyBasket();
    getTotalPrice();
  }
});
