const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

function DoTheTask() {
    if (todoInput.value === "") {
        alert("Write something to add a task.");

    } else {
        let addTask = document.createElement("li");
        addTask.textContent = todoInput.value;

        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete");
        addTask.appendChild(deleteBtn);

        listContainer.appendChild(addTask);
        todoInput.value = "";
    }
}

addBtn.addEventListener("click", DoTheTask);

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    } else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})
