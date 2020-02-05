const body = document.querySelector("body");
const imageCount = 6;

function randomNumber(){
    const rNumber = Math.floor(Math.random () * imageCount);
    console.log(rNumber);
    return rNumber;
}

function bgImage(number){
    image = document.createElement("img");
    console.log(number);
    image.src = `src/${number + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const number = randomNumber();
    console.log(number);
    bgImage(number);
}

init();