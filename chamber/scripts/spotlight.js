const cards = document.querySelector('.spotlight-div');
const companiesIndexes = [];
let counter = 1;


fetch('directory.json')  //feed the required arguments, the URL 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
            for (let i = 0; i < companies.length; i++) {
                if (companies[i].membership === "Gold" || companies[i].membership == "Silver") {
                    companiesIndexes.push(i) //add only gold and silver memberships to the list
                };
            }
            function getRandomInts(min, max, numberOfInts) {
                min = Math.ceil(min);
                max = Math.floor(max); //chooses random ints to go into the set.
                
                //create a set
                let set = new Set();
                //create a loop to check the set size
                while (set.size < numberOfInts) {
                    //push a new random number to the set
                    set.add(Math.floor(Math.random() * (max - min) + min));
                }
                return Array.from(set);
                
            }
        let randomIndexes = getRandomInts(0, companiesIndexes.length, 3);

        for (let i = 0; i < randomIndexes.length; i++){
            displayCompany(companies[companiesIndexes[randomIndexes[i]]]);
        }
    });



function displayCompany(company) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let name = document.createElement('h4');
    let address = document.createElement('h4');
    let phone = document.createElement('h4');
    let website = document.createElement('h6');
    let membership = document.createElement('p');

    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', `Portrait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
    h2.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    // membership.textContent = `Membership: ${company.membership}`;
    website.textContent = `${company.website}`;
    phone.textContent = `${company.phone}`;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.spotlight-div').appendChild(card);
}