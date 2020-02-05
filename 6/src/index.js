// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const formNumber = document.querySelector(".js-formNumber");
const fNumber = formNumber.querySelector("input");
const formGuess = document.querySelector(".js-formGuess");
const formGuessInput = formGuess.querySelector("input");
const formGuess2 = document.querySelector(".js-formGuess2");
const play = formGuess2.querySelector("input");
const generate = document.querySelector(".generate");

// console.log(fNumber.value);
function playGame(number){
    const userNumber = formGuessInput.value;
    console.log(userNumber, number);

}

function paintNumber (){
    const number = fNumber.value;
    
    const value = `Generate a number between 0 to ${number}`;
    generate.innerText = value;
    console.log(value);
    console.log(number);
}

function randomNumber() {
    const number = Math.floor(Math.random() * fNumber.value);
    console.log(fNumber.value);
    console.log(number);
    paintNumber();
    playGame(number);
}

function init(){
    fNumber.addEventListener("input", randomNumber);
    // play.addEventListener("submit", playGame);
    
}

init();