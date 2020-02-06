// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let total = 0;
let cal ="";
let cal2 ="";
const body = document.querySelector("body");
const result = document.querySelector(".result");
let resultDisplay = result.innerText;
let calculators = "";

function input (event) {
    const content = event.target.innerText;
    if (content.length < 3 ) {
        if (content == "C") { 
            cal ="";
            cal2="";
            calculators="";
            total = 0;
            result.innerText = cal;        
        } else if (content == "=") {
            console.log("=");
            console.log(calculators);
            calculation();

        } else if (content =="+" || content =="-" || 
       content =="*" || content =="/") {
            if (cal2 !== "" && cal == !"") {
                calculators = content;
                console.log(cal2, calculators);
                calculation(); 
                calculators = content;       
            } else if (cal2 !== "" && cal == "") {
                calculators = content;
                cal = cal2;
                console.log(cal2, calculators);
         
                calculators = content;
            
            } else {
                calculators = content;
                console.log(calculators);
                cal2 = cal;
                cal = "";
            }
        }
        else {
            const sContent = String(content);
            console.log(sContent);
            cal = cal + sContent;
            result.innerText = cal;
       }
    }
}



function calculation () {
    console.log(calculators);
    console.log("cal2", cal2, "cal", cal);
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