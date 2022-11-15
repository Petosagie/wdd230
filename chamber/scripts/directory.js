if (URL == 'directory.html') {

  const requestURL = 'https://petosagie.github.io/wdd230/chamber/data.json';
  const cards = document.querySelector('.cards');
  
  
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const members = jsonObject['data'];
      members.forEach(displayMembers);
  });

  gridButton = document.getElementById("grid");
  listButton = document.getElementById("list");
  display = document.getElementById("member-data")

  gridButton.addEventListener("click", () => {
      // example using arrow function
      display.classList.add("member-grid");
      display.classList.remove("member-list");
  });

  listButton.addEventListener("click", () => {
      // example using arrow function
      display.classList.remove("member-grid");
      display.classList.add("member-list");
  });


}

function displayMembers(member) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let memberName = document.createElement('h2');
  let memberLogo = document.createElement('img');
  let memberAddress = document.createElement('p');
  let memberPhone = document.createElement('a');
  let memberURL = document.createElement('a');
  let memberEmail = document.createElement('a');


  // Change the textContent property of the h2 element to contain the prophet's full name
  memberName.textContent = member.name;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  memberLogo.setAttribute('src', member.image_url);
  memberLogo.setAttribute('alt', `logo for ${memberName}`);
  memberLogo.width = 100;
  memberLogo.height = 100;
  if (member.index > 3) {
  memberLogo.setAttribute('loading', 'lazy');
  }

  memberAddress.innerHTML = member.address1;
  memberAddress.classList.add('member-address')

  memberPhone.innerHTML = `${member.phone}`;
  memberPhone.href = `tel:${member.phone}`

  memberURL.textContent = 'Visit website';
  memberURL.href = member.url;

  memberEmail.href = `mailto:${member.email}`;
  memberEmail.textContent = member.email;
  memberEmail.classList.add('member-email')

  // Add/append the section(card) with the h2 element
  card.appendChild(memberName);
  card.appendChild(memberLogo);
  card.appendChild(memberAddress);
  card.appendChild(memberPhone);
  card.appendChild(memberURL);
  card.appendChild(memberEmail);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  card.classList.add('member-detail-grid')
  document.querySelector('div.cards').appendChild(card);

}