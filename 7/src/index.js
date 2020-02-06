// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let total = 0;
let cal ="";
let cal2 ="";
const body = document.querySelector("body");
const result = document.querySelector(".result");
let resultDisplay = result.innerText;
console.log(resultDisplay);
// const c = "+";
// const d = 3 ${c} 4;

function plus() {
    inputNumber = Number (cal);
    total = total + inputNumber;
    cal ="";
    result.innerText = String(total);
    body.addEventListener("click", input);
}

function minus() {
    inputNumber = Number (cal);
    // inputNumber2 = Number (cal2);
    total = inputNumber;
    cal ="";
    result.innerText = String(total);
    body.addEventListener("click", input);
}

function calculate(content){
    console.log("calculating");
    if (content == "C") {
        cal="";
        result.innerText = cal;
        total = 0;
    } else if (content == "+") {
        plus();
    } else if (content == "-") {
        if (total == 0) {
            inputNumber = Number (cal);
            total = inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        } else {
            console.log(total);
            inputNumber = Number (cal);
            total = total - inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        }
    } else if (content == "*") {
        if (total == 0) {
            inputNumber = Number (cal);
            total = inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        } else {
            console.log(total);
            inputNumber = Number (cal);
            total = total * inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        }
    } else if (content == "/") {
        if (total == 0) {
            inputNumber = Number (cal);
            total = inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        } else {
            console.log(total);
            inputNumber = Number (cal);
            total = total / inputNumber;
            cal ="";
            result.innerText = String(total);
            body.addEventListener("click", input);
        }
    } else if (content == "=") {
            result.innerText = String(total);
            body.addEventListener("click", input);
    }
}

function input (event) {
    // console.log (event.target);
    // console.log (event.target.innerText);
    const content = event.target.innerText;
    if (content.length < 3 ) {
       if (content =="+" || content =="-" || 
       content =="*" || content =="/" || content =="=" 
       || content =="C"  ) {
           calculate(content);
       } else{
            const sContent = String(content);
            console.log(sContent);
            cal = cal + sContent;
            // console.log(cal);
            result.innerText = cal;
            // console.log(resultDisplay);
       }
    }

}

function init() {
    body.addEventListener("click", input);
}

init();