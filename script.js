function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;
        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        taskList.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
