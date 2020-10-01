const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");
taskInput.addEventListener("keydown", addTask);
const buttonAdd = document.getElementById("tasks__add");
buttonAdd.addEventListener("click", addTask);

function addTask(event) {

    if ((event.code === "Enter" || event.type === "click") && taskInput.value !== "") {
        event.preventDefault();
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `<div class="task__title">
                                ${taskInput.value}
                            </div>
                            <a href="#" class="task__remove">&times;</a>`;
        taskList.appendChild(taskDiv);
        taskInput.value = "";
        taskDiv.querySelector(".task__remove").addEventListener("click", removeTask);
    }
}

function removeTask(event) {
    this.closest(".task").remove();
}