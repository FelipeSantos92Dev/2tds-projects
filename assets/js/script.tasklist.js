class Task {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

let flag = -1;

function addTask() {
  const newTask = document.getElementById("newTask").value;

  if (flag < 0) {
    if (newTask) {
      document.getElementById("error").classList.add("hidden");
      const task = new Task(generateId(), newTask, false);

      renderTask(task);
      document.getElementById("newTask").value = "";
    } else {
      document.getElementById("error").classList.remove("hidden");
    }
  } else {
    const taskSpan = document.getElementById(flag + "-title");
    if (newTask !== null) {
      taskSpan.textContent = newTask;
      document.getElementById("newTask").value = "";
    }
  }
}

function generateId() {
  return Math.floor(Math.random() * 3000);
}

function renderTask(task) {
  let element = "";

  element += `
    <li id="${task.id}">
    <span id="${task.id}-title">${task.title}</span>
      <div>
        <button id="${task.id}-button" class="action"
          onclick="markTask(${task.id})"><i class="fa-solid fa-check"></i>
        </button>
        <button class="action edit" onclick="editTask(${task.id})"><i class="fa-solid fa-pencil"></i></button>
        <button class="action remove" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
      </div>
    </li>
  `;

  document.getElementById("list").innerHTML += element;
}

function markTask(id) {
  document.getElementById(id + "-button").classList.toggle("taskDone");
  document.getElementById(id + "-title").classList.toggle("titleDone");
}

function editTask(id) {
  const taskSpan = document.getElementById(id + "-title");
  if (taskSpan) {
    document.getElementById("newTask").value = taskSpan.textContent;
    document.getElementById("newTask").focus();
    flag = id;
  }
}

function deleteTask(id) {
  document.getElementById(id).remove();
}
