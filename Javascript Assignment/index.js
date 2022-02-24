let tasks = [];
let tasks_index = 0;

let save = document.getElementById('save')
save.onclick = function() { saveTask(tasks_index) };

/*
    saveTask function takes array index as argument.
    on clicking add button it saves task added and 
    calls display function to show all tasks in the array
*/

function saveTask(i) {
    let task = document.getElementById("inputTask").value;
    tasks[i] = task;
    tasks_index += 1;
    var tasksContainer = document.getElementById("list");
    tasksContainer.innerHTML = " ";
    displayTasks();
    document.getElementById("inputTask").value = "";

    var saveBtn = document.getElementById('saveTask')
    saveBtn.style.display = "none";

    var addBtn = document.getElementById('save');
    addBtn.style.display = "inline-block";

}

/* 
    displayTasks function creates a div for each task
    the entered task is present in a paragraph
    the function also creates an edit and a delete button for each added task
*/

function displayTasks() {
    var tasksContainer = document.getElementById("list");
    tasks.forEach(function(element, tasks_index) {

        var divForTask = document.createElement('div');
        divForTask.className = 'task';
        divForTask.id = tasks_index;

        var elementForTask = document.createElement('p');
        elementForTask.id = 'p' + [tasks_index];

        var editBtn = document.createElement('button');
        editBtn.className = tasks_index;

        var delBtn = document.createElement('button');
        delBtn.className = tasks_index;

        var eicon = document.createElement('img');
        eicon.src = 'pencil.svg';

        var dicon = document.createElement('img');
        dicon.src = 'trash3.svg';

        elementForTask.innerText = element;

        editBtn.innerHTML = "Edit " + " ";
        editBtn.onclick = function() { editTask(this) };

        delBtn.innerText = "Delete " + " ";
        delBtn.onclick = function() { deleteTask(this) };

        // adding all elements to the page

        tasksContainer.appendChild(divForTask);
        divForTask.appendChild(elementForTask);
        divForTask.appendChild(editBtn);
        editBtn.appendChild(eicon);
        divForTask.appendChild(delBtn);
        delBtn.appendChild(dicon);
    });
}

/*
    deleteTask deletes the task based on array index when delete button is clicked
*/

function deleteTask(obj) {
    var index = obj.className;
    tasks.splice(index, 1);
    var tasksContainer = document.getElementById("list");
    tasksContainer.innerHTML = " ";
    displayTasks();
}

/*
    editTask edits the task based on array index when edit button is clicked
    it also highlights task which is being edited
*/

function editTask(obj) {
    var index = obj.className;

    document.getElementById("inputTask").value = tasks[index];
    document.getElementById(index).style.backgroundColor = 'yellow';

    var addBtn = document.getElementById('save');
    var saveBtn = document.getElementById('saveTask');

    addBtn.style.display = "none";
    saveBtn.style.display = "inline-block";

    saveBtn.onclick = function() { saveTask(index) };
}