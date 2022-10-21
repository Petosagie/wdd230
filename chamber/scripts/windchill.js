function getWindchill(temp, wspeed) {
    // Reference to DOM elements
    let tempObj = document.querySelector("#temp");
    let wspeedObj = document.querySelector("#wspeed");
    let wchillObj = document.querySelector("#wchill");

    // Calculate windspeed if necessary
    let wcMsg = "N/A";

    if (temp <= 50 && wspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wspeed,0.16)) + 
        (0.4275*temp*Math.pow(wspeed,0.16)));
                    
        
        wcMsg = `${chill}&deg; F`;
    }

    // Populate the DOM
    tempObj.textContent = temp;
    wspeedObj.textContent = wspeed;
    wchillObj.innerHTML = wcMsg;
}

getWindchill(30, 10);