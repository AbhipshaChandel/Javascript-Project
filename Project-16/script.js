let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displaytasks() {
  let text = document.querySelector(".list");
  text.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      updateStorage();
      displaytasks();
    };

    let delbtn = document.createElement("button");
    delbtn.innerHTML = "X";
    delbtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      updateStorage();
      displaytasks();
    };

    li.appendChild(delbtn);
    text.appendChild(li);
  });
}

document.querySelector(".btn").addEventListener("click", function () {
  let x = document.querySelector(".text").value;
  if (x === "") {
    alert("Add a task");
    return
  }
  tasks.push({ text: x, completed: false });
  document.querySelector(".text").value=""
  updateStorage();
  displaytasks();
});

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

displaytasks();
