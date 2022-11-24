
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  
  document.querySelector("#currentDate").innerHTML = currentDate;
  
  // Hamburger button toggle menu
  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const menuButton = document.getElementById("hamburgerBtn");
  menuButton.onclick = toggleMenu;
  
  // Last modified
  const dateTimeLastModified = `Last modification: ${document.lastModified}`;
  const year = new Date(document.lastModified).getFullYear();
  
  document.querySelector("#year").innerHTML = year;
  document.querySelector("#date").innerHTML = dateTimeLastModified;

  
// add spotlight for gold members
if (URL == 'index.html') {

  const requestURL = 'chamber/data.json';
  
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const members = jsonObject['data'];
      goldMembers = members.filter(member => member.membership === 'gold');
      updateSpotlights(goldMembers);
  })
}

// function to add content
function updateSpotlights(members) {
  const cards = document.querySelectorAll('.spotlight-div');
  
  shuffleArray(members)   
  memberIndex = 0

  for (i =0; i < cards.length; i++) {
      cards[i].children[0].innerText = members[memberIndex].name;
      cards[i].children[4].src = members[memberIndex].logo;
      // cards[i].children[1].alt = members[memberIndex].name;
      // cards[i].children[2].innerText = members[memberIndex].slogan;
      cards[i].children[1].href = "Email:" + members[memberIndex].email;
      cards[i].children[1].innerText = members[memberIndex].email;
      cards[i].children[2].innerText = members[memberIndex].phone;
      memberIndex ++;
  }
  

}
function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}