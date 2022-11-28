
const div = document.querySelector('.directory-buttons');
const cardsButton = document.getElementById('card-button');
const listButton = document.getElementById('list-button');
const cards = document.getElementById('cards');
const list = document.getElementById('list');

cardsButton.addEventListener('click', () => {
    list.classList.add('hidden');
    cards.classList.remove('hidden');
}, false);

listButton.addEventListener('click', () => {
    cards.classList.add('hidden');
    list.classList.remove('hidden');
}, false);

if (window.innerWidth >= 520 && window.innerWidth <= 1120) {
    cards.classList.add('hidden');
    list.classList.remove('hidden');
};




  const requestURL = 'https://petosagie.github.io/wdd230/chamber/data.json';

//Fetch the JSON file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const cardsAndList = jsonObject['directory'];

        cardsAndList.forEach(displayCards);
        cardsAndList.forEach(displayList);
    });

function displayCards(card) {
    //Create elements to add to the document
    let section = document.createElement('section');
    let portrait = document.createElement('img');
    let p0 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let p3 = document.createElement('p');
    
    //Add text content to the directory cards
    p0.textContent = `${card.name}`;
    p1.textContent = `Address: ${card.address}`;
    p2.textContent = `Tel: ${card.phonenumber}`;
    a.textContent = `Website: ${card.website}`;
    p3.textContent = `Membership Level: ${card.membership}`;
    p0.classList.add('cardh4');
    
    //Build image attributes by using setAttribute method for src, alt, and loading attribute values.
    portrait.setAttribute('src', card.logo);
    portrait.setAttribute('alt', `Logo for ${card.name}`);
    portrait.setAttribute('loading', 'lazy');
    a.setAttribute('href', card.website);
    
    //Add/append the h2 and image to the section(card)
    section.appendChild(p0);
    section.appendChild(portrait);
    
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(a);
    section.appendChild(p3);
        
    
    //Add/append the section(card) to the div with the card class
    document.querySelector('#cards').appendChild(section);
}

function displayList(list) {
    //Create elements to add to the document
    let section = document.createElement('section');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let p3 = document.createElement('p');

    
    //Add text content to the directory cards
    h4.textContent = `${list.name}`;
    p1.textContent = `${list.address}`;
    p2.textContent = `${list.phonenumber}`;
    a.textContent = `${list.website}`;
    p3.textContent = `${list.membership}`;
    a.setAttribute('href', list.website);
    
    //Add/append the h2 and image to the section(card)
    section.appendChild(h4);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(a);
    section.appendChild(p3);

     //Add/append the section(card) to the div with the card class
     document.querySelector('#list').appendChild(section);
}

