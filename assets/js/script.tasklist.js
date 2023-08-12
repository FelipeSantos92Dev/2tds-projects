function addTask() {
  const newTask = document.getElementById("newTask").value;

  if (newTask) {
    let task = {
      id: generateId(),
      title: newTask,
      status: "pending",
    };

    renderTask(task);
  }
}

function generateId() {
  return Math.floor(Math.random() * 3000);
}

function renderTask(task) {
  let element = "";

  element += `
    <li>
      <span>${task.title}</span>
      <div>
        <button class="action"><i class="fa-solid fa-check"></i></button>
        <button class="action"><i class="fa-solid fa-pencil"></i></button>
        <button class="action"><i class="fa-solid fa-trash"></i></button>
      </div>
    </li>
  `;

  document.getElementById("list").innerHTML += element;
}
