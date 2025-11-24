let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let list = document.getElementById("list");

function addTask() {
  let task = taskInput.value.trim();
  if (task !== "") {
    let li = document.createElement("li");
    li.textContent = task;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", function () {
      li.remove();
    });
    updateBtn.addEventListener("click", function () {
      let newTask = prompt("Enter new task:", li.firstChild.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask.trim();
      }
    });
    li.appendChild(updateBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    taskInput.value = "";
  }
}
addBtn.addEventListener("click", addTask);