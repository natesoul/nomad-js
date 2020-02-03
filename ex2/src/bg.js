const body = document.querySelector("body");

function bgImageLoad(imgNumbers){
    // const image = new Image();
    // imgNumbers = +1;
    const image = document.createElement("img");
    image.src = `src/${imgNumbers + 1}.jpg`;
    // image.src = 'src/1.jpg';
    image.classList.add("bgImage");
    body.prepend(image);
}

function imageNumber(){
    const imageNumber = 6;
    const bgImageNumber = Math.floor(Math.random() * imageNumber);
    return bgImageNumber;
}

function init(){
    const number = imageNumber();
    bgImageLoad(number);
}

init();