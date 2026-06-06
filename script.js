function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskText}
        </span>

        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function editTask(button) {
    const taskSpan =
        button.parentElement.previousElementSibling;

    const updatedTask = prompt(
        "Edit your task:",
        taskSpan.innerText
    );

    if (updatedTask !== null && updatedTask.trim() !== "") {
        taskSpan.innerText = updatedTask;
    }
}