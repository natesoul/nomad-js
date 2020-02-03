const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "TODO_LIST";
let toDos = [];

function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function toDoPaint(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText ="X";
    delBtn.addEventListener("click", delToDo);
    span.innerText = text;
    li.appendChild (delBtn);
    li.appendChild (span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        id : newId ,
        text : text
    };
    toDos.push(toDoObj);
    saveToDo();
    
}

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event){
    // event.preventDefault();
    const currentValue = toDoInput.value;
    toDoPaint(currentValue);
    toDoInput.value ="";
}

function loadToDo () {
   const loadedToDo = localStorage.getItem(TODOS_LS);
   if (loadedToDo !== null) {
       parseToDo = JSON.parse(loadedToDo);
       parseToDo.forEach(function(toDo){
           toDoPaint(toDo.text);
       })
   };
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();