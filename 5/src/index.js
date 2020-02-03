// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm");
const taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector("js-finishedList");

const task_LS = "PENDING";
const finished_LS = "FINISHED";
let taskList = [];
let finishedList = [];

function saveTask(){
    localStorage.setItem(task_LS, JSON.stringify(taskList));
    localStorage.setItem(finished_LS, JSON.stringify(finished_LS));
}

function delTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    
    const cleanPendingList = taskList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    taskList = cleanPendingList;
    saveTask();
}

function checkTask(event){
    const newId = taskList.length+1;
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.appendChild(li);
    pendingList.removeChild(li);
    const cleanPendingList = taskList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    taskList = cleanPendingList;
    saveTask();


}

function paintPeding(text){
    const newId = taskList.length+1;
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    checkBtn = document.createElement("button");
    span.innerText = text;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", delTask);
    checkBtn.innerText = "V";
    checkBtn.addEventListener("click", checkTask);
    li.id = newId;
    li.appendChild (span);
    li.appendChild (delBtn);
    li.appendChild (checkBtn);
    pendingList.appendChild(li);

    const taskObj = {
        id : newId ,
        text : text
    };
    taskList.push(taskObj);
    // console.log(taskList);
    saveTask();

}

function handlSubmit(event) {
    currentValue = taskInput.value;
    paintPeding(currentValue);
    taskInput.value = "";
}

function loadTask(){
    loadedTask = localStorage.getItem(task_LS);
    // console.log(loadedTask);
    if (loadedTask !== null) {
        parseTask = JSON.parse(loadedTask);
        console.log(parseTask);
        parseTask.forEach(function(tasks){
            paintPeding(tasks.text);
        })
    }
}

function init() {
    loadTask();
    taskForm.addEventListener("submit", handlSubmit);
}

init();