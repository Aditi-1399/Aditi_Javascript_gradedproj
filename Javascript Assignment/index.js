let tasks = [];
let tasks_index = 0;

let save = document.getElementById('save')
save.onclick = function() { saveTask(tasks_index) };

function saveTask(i) {
    let task = document.getElementById("inputTask").value;
    tasks[i] = task;
    console.log(tasks[tasks_index]);
    tasks_index += 1;
    console.log(tasks_index);
    console.log(tasks);
    var tasksContainer = document.getElementById("list");
    tasksContainer.innerHTML = " ";
    displayTasks();
    document.getElementById("inputTask").value = "";

    var saveBtn = document.getElementById('saveTask')
    saveBtn.style.display = "none";

    var addBtn = document.getElementById('save');
    addBtn.style.display = "inline-block";

}

function displayTasks() {
    var tasksContainer = document.getElementById("list");
    tasks.forEach(function(element, tasks_index) {
        // create paragraph for each comment

        var divForTask = document.createElement('div');
        divForTask.className = 'task'

        divForTask.id = tasks_index;
        var elementForTask = document.createElement('p');
        elementForTask.id = 'p' + [tasks_index]
        var editBtn = document.createElement('button');
        editBtn.className = tasks_index;
        var delBtn = document.createElement('button');
        delBtn.className = tasks_index;
        var eicon = document.createElement('img');
        eicon.src = 'pencil.svg';
        var dicon = document.createElement('img');
        dicon.src = 'trash3.svg';
        let newLine = document.createElement('br');
        //set text of paragraph


        elementForTask.innerText = element;
        //editBtn.innerText = "Edit";
        editBtn.innerHTML = "Edit " + " ";
        editBtn.onclick = function() { editTask(this) };
        delBtn.innerText = "Delete " + " ";
        delBtn.onclick = function() { deleteTask(this) };
        // add paragraph into comments holder.

        tasksContainer.appendChild(divForTask);
        divForTask.appendChild(elementForTask);
        divForTask.appendChild(editBtn);
        editBtn.appendChild(eicon);
        divForTask.appendChild(delBtn);
        delBtn.appendChild(dicon);
        //divForTask.appendChild(newLine);
    });

}

function deleteTask(obj) {
    var index = obj.className;
    tasks.splice(index, 1);
    var tasksContainer = document.getElementById("list");
    tasksContainer.innerHTML = " ";
    displayTasks();
}

// function editTask(obj) {
//     var index = obj.className;
//     document.getElementById("inputTask").value = tasks[index];
//     var addBtn = document.getElementById('save');
//     var saveBtn = document.getElementById('saveTask')
//     addBtn.style.display = "none";
//     saveBtn.style.display = "inline-block";
//     saveBtn.onclick = function() { saveTask(index) };
// }

function editTask(obj) {
    tasks_index -= 1;
    var index = obj.className;
    document.getElementById("inputTask").value = tasks[index];
    document.getElementById(index).style.backgroundColor = 'yellow';
    var addBtn = document.getElementById('save');
    var saveBtn = document.getElementById('saveTask')
    addBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    saveBtn.onclick = function() { saveTask(index) };
}