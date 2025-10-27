// Step 1: Create an empty array to store user tasks
let tasks = [];

// Step 2: Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Step 3: Function to display tasks using a for loop
function displayTasks() {
  // Clear the existing list before re-rendering
  taskList.innerHTML = "";

  // Loop through all tasks in the array
  for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = tasks[i];
    taskList.appendChild(listItem);
  }
}

// Step 4: Function to update tasks dynamically using a while loop
function updateTaskList() {
  let i = 0;

  // Keep looping while there are tasks left to display
  while (i < tasks.length) {
    i++;
  }

  // After looping, call displayTasks() to refresh list on the screen
  displayTasks();
}

// Step 5: Add new task when button is clicked
addTaskBtn.addEventListener("click", function () {
  const newTask = taskInput.value.trim(); // get value and remove spaces

  if (newTask === "") {
    alert("Please enter a task!");
    return;
  }

  // Add new task to the array
  tasks.push(newTask);

  // Update task list using while loop
  updateTaskList();

  // Clear input field
  taskInput.value = "";
});
