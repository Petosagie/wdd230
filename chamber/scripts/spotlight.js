const spotlightRequestURL = 'data.json';


fetch(spotlightRequestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const spotlightCompanies = jsonObject["directory"];
        // jsonObject.companies
        let lenght = Object.keys(spotlightCompanies).length;
        console.log(lenght);
        for (let i = 1; i <= lenght; i++) {
            if (spotlightCompanies[i].membership === 'gold' || spotlightCompanies[i].membership === 'silver') {

                for (let i = 1; i < 4; i++) {

                    const spotlightCard = document.querySelector(`.spotlight_${i}`);
                    console.log(Math.random());
                    spotlightCard.innerHTML = displayspotlightCompanies(spotlightCompanies[Math.floor(Math.random() * lenght)]);
                    console.log(spotlightCard);
                    console.log('.spotlight_' + i);
                }
            }
        }

        // let spotlightLenght = object.keys( spotlightCompanies.lenght)
        // spotlightCompanies.forEach(displayspotlightCompanies);
    });

function displayspotlightCompanies(companie) {
    return `<h2>${companie.name}</h2>
            <img src="${companie.logo}" alt="">
            <hr>
            <p>${companie.address}</p>
            <p>${companie.website}</p>
            <p>${companie.phonenumber}</p>`;
}