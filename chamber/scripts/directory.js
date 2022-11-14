
const requestURL = 'https://petosagie.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const cards = jsonObject["cards"];
    cards.forEach(displayCards);
  });

function displayCards(cardsinfo) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let phonenumber = document.createElement("p");
  let membership = document.createElement("p");
  let portrait = document.createElement("img");

  h2.textContent = `${cardsinfo.name}`;
  address.textContent = `Address: ${cardsinfo.address}`;
  phonenumber.textContent = `Phone number: ${cardsinfo.phonenumber}`;
  membership.textContent = `Membership Required: ${cardsinfo.membership}`;

  portrait.setAttribute("src", cardsinfo.imageurl);
  portrait.setAttribute("alt", `Information of ${cardsinfo.name}`);
  card.append(portrait, h2, address, phonenumber, membership);
  document.querySelector("article.cards").appendChild(card);
}