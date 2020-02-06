// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let total = 0;
let cal ="";
let cal2 ="";
const body = document.querySelector("body");
const result = document.querySelector(".result");
let calculators = "";

function input (event) {
    const content = event.target.innerText;
    if (content.length < 3 ) {
        if (content == "C") { 
            cal ="";
            cal2="";
            calculators="";
            total = 0;
            result.innerText = "";      
        } else if (content == "=") {
            calculation();
            cal2="";

        } else if (content =="+" || content =="-" || 
        content =="*" || content =="/") {
            if (cal2 !== "") {
                calculation(); 
                calculators = content;      
            } else if (cal2 == "") {
                calculators = content;
                cal2 = cal;
                cal ="";
            } else {
                calculators = content;
                cal2 = cal;
                cal = "";
            }
        }
        else {
            const sContent = String(content);
            cal = cal + sContent;
            result.innerText = cal;
       }
    }
}

function calculation () {
    switch (calculators) {
        case "+":
            total = Number(cal2) + Number(cal);
            resultNumber();
            break;
        case "-":
            total = Number(cal2) - Number(cal);
            resultNumber();
            break;
        case "*":
            total = Number(cal2) * Number(cal);
            resultNumber();
            break;
        case "/":
            total = Number(cal2) / Number(cal);
            resultNumber();
            break;
    }
}

function resultNumber() {
    cal2 =String(total);
    result.innerText = String(total);
    calculators = "";
    cal ="";
}

function init() {
    body.addEventListener("click", input);
}

init();