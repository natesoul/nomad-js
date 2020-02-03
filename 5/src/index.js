// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm");
const taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const task_LS = "PENDING";
const finished_LS = "FINISHED";
let taskList = [];
let finishList = [];

function saveTask(){
    localStorage.setItem(task_LS, JSON.stringify(taskList));
    localStorage.setItem(finished_LS, JSON.stringify(finishList));
}

function delTask(event) {
    const btn = event.target;
    // console.log(event);
    // console.log(event.target.previousSibling.innerText);
    const li = btn.parentNode;
    pendingList.removeChild(li);
    
    const cleanPendingList = taskList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    taskList = cleanPendingList;
    saveTask();
}

function checkTask(event){
    const newId = finishList.length+1;
    const pBtn = event.target;
    const pLi = pBtn.parentNode;
    const pLi_text = pBtn.previousSibling.previousSibling.innerText;
    
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    backBtn = document.createElement("button");
    backBtn.addEventListener
    
    span.innerText = pLi_text;
    delBtn.innerText ="❌";
    backBtn.innerText ="◀️";
    li.id = newId;
    li.appendChild (span);
    li.appendChild (delBtn);
    li.appendChild (backBtn);
    finishedList.appendChild(li);

    pendingList.removeChild(pLi);

    const cleanPendingList = taskList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    taskList = cleanPendingList;
    const taskObj = {
        id : newId ,
        text : pLi_text
    };
    finishList.push(taskObj);
    saveTask();


}

function paintPending(text){
    const newId = taskList.length+1;
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    checkBtn = document.createElement("button");
    span.innerText = text;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", delTask);
    checkBtn.innerText = "✅";
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

function paintFinishing(text){
    const newId = taskList.length+1;
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    backBtn = document.createElement("button");
    span.innerText = text;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", delTask);
    backBtn.innerText ="◀️";
    // backBtn.addEventListener("click", );
    li.id = newId;
    li.appendChild (span);
    li.appendChild (delBtn);
    li.appendChild (backBtn);
    finishedList.appendChild(li);

    const taskObj = {
        id : newId ,
        text : text
    };
    finishList.push(taskObj);
    // console.log(taskList);
    saveTask();
}

function handlSubmit(event) {
    currentValue = taskInput.value;
    paintPending(currentValue);
    taskInput.value = "";
}

function loadTask(){
    loadedTask = localStorage.getItem(task_LS);
    loadedFTask = localStorage.getItem(finished_LS);
    // console.log(loadedTask);
    if (loadedTask !== null) {
        parseTask = JSON.parse(loadedTask);
        console.log(parseTask);
        parseTask.forEach(function(tasks){
            paintPending(tasks.text);
        })
    }

    if (loadedFTask !== null) {
        parseFTask = JSON.parse(loadedFTask);
        console.log(parseFTask);
        parseFTask.forEach(function(tasks){
            paintFinishing(tasks.text);
        })
    }
}

function init() {
    loadTask();
    taskForm.addEventListener("submit", handlSubmit);
}

init();