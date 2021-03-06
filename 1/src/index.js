// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  over:"mouseover",
  leave:"mouseleave",
  resize:"resize",
  right:"auxclick"
};

const title = document.querySelector("h2");



function handleOver(){
  title.style.color = colors [1];
  title.innerHTML = "The mouse is here!";
}

function handleLeave(){
  title.style.color = colors [0];
  title.innerHTML = "The mouse is gone!";
}

function handleResize(){
  title.style.color = colors [2];
  title.innerHTML = "You just resized!";
}

function handleRight(){
  title.style.color = colors [4];
  title.innerHTML = "That was a right click!";
}

title.addEventListener(superEventHandler.over,handleOver);
title.addEventListener(superEventHandler.leave, handleLeave);
window.addEventListener(superEventHandler.resize, handleResize);
document.addEventListener(superEventHandler.right, handleRight);