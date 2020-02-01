// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const myCountry = document.querySelector(".myCountry");
const country_LS = "Country";

function select(event) {
    event.preventDefault();
    const currentValue = myCountry.value;
    saveCountry(currentValue);
}

function saveCountry(text) {
    myCountry.addEventListener("change", select);
    localStorage.setItem("Country", text);
}

function askForCountry(){
    const currentValue = localStorage.getItem(country_LS);
    if (currentValue === null){ 
        myCountry.addEventListener("change", select);
    } else {
    loadCountry();
    }
}

function loadCountry() {
    const currentValue = localStorage.getItem(country_LS);
    document.querySelector(".myCountry").value = currentValue;
    myCountry.addEventListener("change", select);
}

function init() {
    askForCountry();
}

init();