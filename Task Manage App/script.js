//  day-27 
 // Task Managment App 

let TaskForm = document.getElementById('taskForm');
let container = document.getElementsByClassName('container');
let taskList = document.getElementById('taskList');
let Tasks = [];
loadTasks();
TaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    GetTasks();
    displayTasks();
    savedata();
    TaskForm.reset();

})

function GetTasks() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    const newTask = { title, description, dueDate };
    Tasks.push(newTask);
}

function displayTasks() {
    taskList.innerHTML = '';
    Tasks.forEach((task, index) => {
        let liItem = document.createElement('div');
        liItem.className = 'task';
        liItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
        <div class="buttons">
        <button id="delbtn" class="delete" onclick="deleteTask(${index})">Delete</button>
        </div>
        `;
        taskList.appendChild(liItem);
    });
}

function deleteTask(index){
    if (confirm(`Delete ${Tasks[index].title} ! `)) {
        Tasks.splice(index, 1);
        displayTasks();
        console.log(Tasks);
        savedata();
        displayTasks();

    }

}

function savedata() {
    localStorage.setItem("task", JSON.stringify(Tasks));
}

function loadTasks(){
    const savedTasks = localStorage.getItem('task');
    if (savedTasks){
        Tasks = JSON.parse(savedTasks);
        displayTasks();
    }
}

// localStorage.clear()