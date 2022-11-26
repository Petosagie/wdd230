const requestURL = 'https://petosagie.github.io/wdd230/chamber/data.json';
const aside = document.querySelector('.aside');

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    const businesses = directory.filter((business) => business.membership == 'Gold');
    create_cards(businesses);
  });


let spotlights = [];

function create_cards(businesses){
    let max = businesses.length;

    
    while(spotlights.length < 3){

        let random = Math.floor(Math.random()*max);

        if(!spotlights.includes(random)){
            spotlights.push(random);
            create_card(businesses[random]);
        }

    }

    aside.lastChild.classList.add('spotlight3');

}


function create_card(business){
    

    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('src', business.logo);
    img.setAttribute('alt', business.name + " " + business.membership + " member");
    img.setAttribute('loading', 'lazy');


    let h3 = document.createElement('h3');
    h3.textContent = business.name;

    let p1 = document.createElement('p');
    p1.textContent = business.phone;

  
    let a = document.createElement('a');
    a.setAttribute('href', business.site);
    a.textContent = business.site;

    div2.appendChild(img);
    div2.classList.add('div-height-50');
    div.appendChild(div2);
    div.appendChild(h3);
    div.appendChild(p1);

    div.appendChild(a);

    aside.appendChild(div);

}