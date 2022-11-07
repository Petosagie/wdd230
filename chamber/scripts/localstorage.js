// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.



let lastVisit = window.localStorage.getItem("visits-lv");
lastVisit = new Date(lastVisit);
let newVisit = new Date();

// To calculate the time difference of two dates
let Difference_In_Time = newVisit.getTime() - lastVisit.getTime() ;

// To calculate the no. of days between two dates
todayDisplay.textContent = (Difference_In_Time / (1000 * 3600 * 24)).toFixed(0);
lastVisit = new Date();
localStorage.setItem("visits-lv", lastVisit);


