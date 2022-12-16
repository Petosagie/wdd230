
// initialize display elements

const NoOrderedDrink = document.querySelector(".noDrink");


// get the stored value in localStorage

let numberDrink = Number(window.localStorage.getItem("numDrinks"));
NoOrderedDrink.textContent = numberDrink;
// console.log(length(numDrink));
console.log(numberDrink);

