class Task {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  markTask(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = !task.status;
      }
    });
    document.getElementById(id + "-title").classList.toggle("titleDone");
    document.getElementById(id + "-button").classList.toggle("taskDone");
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTask(id, title) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.title = title;
      }
    });
  }
}

const taskList = new TaskList();
let flag = -1;

function createTask() {
  const newTask = document.getElementById("newTask").value;

  if (flag < 0) {
    if (newTask) {
      document.getElementById("error").classList.add("hidden");
      const task = new Task(generateId(), newTask, false);

      taskList.addTask(task);

      document.getElementById("newTask").value = "";
    } else {
      document.getElementById("error").classList.remove("hidden");
    }
  } else {
    if (newTask !== null) {
      taskList.updateTask(flag, newTask);
      document.getElementById("newTask").value = "";
      flag = -1;
    }
  }
  renderTasks();
}

function generateId() {
  return Math.floor(Math.random() * 3000);
}

function doneTask(id) {
  taskList.markTask(id);
}

function removeTask(id) {
  taskList.deleteTask(id);
  renderTasks();
}

function editTask(id) {
  const taskSpan = document.getElementById(id + "-title");
  if (taskSpan) {
    document.getElementById("newTask").value = taskSpan.textContent;
    document.getElementById("newTask").focus();
    flag = id;
  }
}

function renderTasks() {
  let element = "";
  taskList.tasks.forEach((task) => {
    element += `
         <li id="${task.id}">
         <span id="${task.id}-title">${task.title}</span>
           <div>
             <button id="${task.id}-button" class="action"
               onclick="doneTask(${task.id})"><i class="fa-solid fa-check"></i>
             </button>
             <button class="action edit" onclick="editTask(${task.id})"><i class="fa-solid fa-pencil"></i></button>
             <button class="action remove" onclick="removeTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
           </div>
         </li>
       `;
  });
  document.getElementById("list").innerHTML = element;
}
