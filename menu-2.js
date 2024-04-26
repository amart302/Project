// const products_2 = [
//     {
//       hit: true,
//       new: true,
//       imageSrc: "./img-3/roll1.svg",
//       sharp: true,
//       vegan: true,
//       lactoseFree: true,
//       title: "Гункан лосось",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: true,
//       imageSrc: "./img-3/roll2.svg",
//       sharp: true,
//       vegan: false,
//       lactoseFree: false,
//       title: "Гункан креветка",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: true,
//       new: false,
//       imageSrc: "./img-3/roll3.svg",
//       sharp: false,
//       vegan: true,
//       lactoseFree: true,
//       title: "Нигири угорь",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: false,
//       imageSrc: "./img-3/roll4.svg",
//       sharp: false,
//       vegan: false,
//       lactoseFree: true,
//       title: "Нигири угорь",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: false,
//       imageSrc: "./img-3/roll5.svg",
//       sharp: false,
//       vegan: false,
//       lactoseFree: false,
//       title: "Гункан с тунцом и трюфелем",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: false,
//       imageSrc: "./img-3/roll6.svg",
//       sharp: false,
//       vegan: false,
//       lactoseFree: false,
//       title: "Гункан тунец спайси",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: false,
//       imageSrc: "./img-3/roll7.svg",
//       sharp: false,
//       vegan: false,
//       lactoseFree: false,
//       title: "Гункан угорь",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//     {
//       hit: false,
//       new: false,
//       imageSrc: "./img-3/roll8.svg",
//       sharp: false,
//       vegan: false,
//       lactoseFree: false,
//       title: "Нигири тунец",
//       weight: "Вес: 40г",
//       description:
//         "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//       price: 190,
//       currency: "руб",
//       basket: false,
//       quantity: 1,
//     },
//   ];
  
//   function createProductCards() {
//     for (let i = 0; i < products_2.length; i++) {
//       const divCard = document.createElement("div");
//       divCard.id = "card" + i;
//       divCard.className = "card";
//       divCard.innerHTML = `<div class="cardHeader" id="cardHeader${+i}">
//                             <div class="divlabels" id="divlabels${i}"></div>
//                             <img src="${products_2[i].imageSrc}">
//                           </div>
//                           <div class="cardMain" id="cardMain${+i}">
//                             <div class="divIcons" id="divIcons${i}"></div>
//                             <h2 class="prooductTitle">${products_2[i].title}</h2>
//                             <span class="weightCard">${products_2[i].weight}</span>
//                             <div class="descriptionCard">${
//                               products_2[i].description
//                             }</div>
//                           </div>
//                           <div class="footerCard" id="footerCard${i}">
//                             <span class="priceCard">${
//                               products_2[i].price + " " + products_2[i].currency
//                             }</span>
//                             <div class="likeBlock" id="likeBlock${i}"><img src="./img-3/likeImg.svg"></div>
//                             <div class="addBlock" id="addBlock${i}"><img src='./img-3/addImg.svg'></div>
//                           </div>`;
//       document.getElementById("conteiner-2").appendChild(divCard);
  
//       const divlabels = document.getElementById("divlabels" + i);
  
//       if (products_2[i].hit == true) {
//         divlabels.innerHTML += '<div class="hitBlock">Hit</div>';
//       }
//       if (products_2[i].new == true) {
//         divlabels.innerHTML += '<div class="newBlock">New</div>';
//       }
  
//       const divIcons = document.getElementById("divIcons" + i);
  
//       if (products_2[i].sharp == true) {
//         divIcons.innerHTML += `<img src="./img-3/sharpIcon.svg">`;
//       }
//       if (products_2[i].vegan == true) {
//         divIcons.innerHTML += `<img src="./img-3/veganIcon.svg">`;
//       }
//       if (products_2[i].lactoseFree == true) {
//         divIcons.innerHTML += `<img src="./img-3/lactoseFreeIcon.svg">`;
//       }
//     }
//   }
//   createProductCards();