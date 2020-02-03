// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm");
const taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const pending_LS = "PENDING";
const finished_LS = "FINISHED";
let pendList = [];
let finishList = [];

function saveTask(){
    localStorage.setItem(pending_LS, JSON.stringify(pendList));
    localStorage.setItem(finished_LS, JSON.stringify(finishList));
}

function delTask(event) {
    const btn = event.target;
    console.log(event);
    console.log(event.target.parentNode.parentNode);
    // console.log(event.target.previousSibling.innerText);
    const li = btn.parentNode;
    pendingList.removeChild(li);
    
    const cleanPendingList = pendList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    pendList = cleanPendingList;
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
    delBtn.addEventListener("click", delFinished);
    backBtn = document.createElement("button");
    backBtn.addEventListener("click", taskReturn);
    
    span.innerText = pLi_text;
    delBtn.innerText ="❌";
    backBtn.innerText ="◀️";

    li.id = newId;
    li.appendChild (span);
    li.appendChild (delBtn);
    li.appendChild (backBtn);
    finishedList.appendChild(li);
    pendingList.removeChild(pLi);

    const cleanPendingList = pendList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    pendList = cleanPendingList;
    const taskObj = {
        id : newId ,
        text : pLi_text
    };
    finishList.push(taskObj);
    saveTask();


}

function paintPending(text){
    const newId = pendList.length+1;
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
    pendList.push(taskObj);
    // console.log(taskList);
    saveTask();

}

function delFinished(event){
    const btn = event.target;
    // console.log(event);
    // console.log(event.target.parentNode.parentNode);
    // console.log(event.target.previousSibling.innerText);
    const li = btn.parentNode;
    finishedList.removeChild(li);
    
    const cleanFinishingList = finishList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
   
    finishList = cleanFinishingList;
    saveTask();
}

function taskReturn(){
    const btn = event.target;
    console.log(event);
    console.log(event.target.parentNode.parentNode);
    // console.log(event.target.previousSibling.innerText);
    const li = btn.parentNode;
    pendingList.removeChild(li);
    
    const cleanPendingList = pendList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    pendList = cleanPendingList;
    saveTask();
}

function taskReturn(event){
    const newId = finishList.length;
    const pBtn = event.target;
    const pLi = pBtn.parentNode;
    const pLi_text = pBtn.previousSibling.previousSibling.innerText;
    
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    delBtn.addEventListener("click", delTask);
    backBtn = document.createElement("button");
    backBtn.addEventListener("click", checkTask);
    
    span.innerText = pLi_text;
    delBtn.innerText ="❌";
    backBtn.innerText ="✅";

    li.id = newId;
    li.appendChild (span);
    li.appendChild (delBtn);
    li.appendChild (backBtn);
    pendingList.appendChild(li);

    finishedList.removeChild(pLi);

    const cleanFinishingList = finishList.filter(function(tasks){
        return tasks.id !== parseInt(li.id);
    });
    finishList = cleanFinishingList;
    const taskObj = {
        id : newId ,
        text : pLi_text
    };
    pendList.push(taskObj);
    saveTask();
}

function paintFinishing(text){
    const newId = finishList.length+1;
    li = document.createElement("li");
    span = document.createElement("span");
    delBtn = document.createElement("button");
    backBtn = document.createElement("button");
    span.innerText = text;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", delFinished);
    backBtn.innerText ="◀️";
    backBtn.addEventListener("click", taskReturn);
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
    loadedTask = localStorage.getItem(pending_LS);
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