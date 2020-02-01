// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const myCountry = document.querySelector(".myCountry");

function select(event) {
    event.preventDefault();
    const currentValue = myCountry.value;
    saveCountry(currentValue);
}

function saveCountry(text) {
    myCountry.addEventListener("change", select);
    localStorage.setItem("Country", text);
}

// function askForCountry() {
//     myCountry.addEventListener("onselect", select);
// }

function askForCountry(){
    myCountry.addEventListener("change", select);
}

function init() {
    
    askForCountry();
}

init();