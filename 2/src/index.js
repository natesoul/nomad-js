// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colors = ["#ffffff", "#9932CC", "#FFD700", "#00BFFF"];
const title = document.querySelector("h1");
const body = document.querySelector("body");


body.style.backgroundColor = colors[1];
title.style.color = colors[0];

function handleResize (){
    let viewportWidth = window.innerWidth;
    if (viewportWidth > 620) {
        body.style.backgroundColor = colors[2];
    } else if(viewportWidth < 470 ) {
        body.style.backgroundColor = colors[3];
    } else {
        body.style.backgroundColor = colors[1];
    }
}

window.addEventListener("resize", handleResize);
