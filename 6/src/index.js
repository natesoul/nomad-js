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
const gameResult = document.querySelector(".js-result");
const gameResult2 = document.querySelector(".js-result2");

function result(event){
    event.preventDefault();
    randomNumber();
}

function playGame(number){
    const userNumber = formGuessInput.value;
    gameResult.innerText = `You chose : ${userNumber} , the machine chose : ${number}.`
    if (userNumber == number){gameResult2.innerText = "You won!"
    } else {
        gameResult2.innerText = "You lost!"
    }  
}



function paintNumber (){
    const number = fNumber.value;
    
    const value = `Generate a number between 0 to ${number}`;
    generate.innerText = value;
}

function randomNumber() {
    const rNumber = Math.floor(Math.random() * fNumber.value);
    paintNumber();
    playGame(rNumber);
}

function init(){
    fNumber.addEventListener("input", paintNumber);
    play.addEventListener("click", result);
}

init();