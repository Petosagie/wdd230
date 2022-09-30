const year = document.getElementById("year");
const lastupdate = document.getElementById("lastupdate");

year.textContent = new Date().getFullYear();
lastupdate.textContent = document.lastModified;