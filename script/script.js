document.addEventListener("DOMContentLoaded", function() {
  // Get the timer element and start/stop/resume buttons
  var timerElement = document.getElementById("timer");
  var startButton = document.getElementById("startButton");
  var stopButton = document.getElementById("stopButton");
  var resumeButton = document.getElementById("resumeButton"); // Add this line

  // Set the initial time
  var time = 1500; // 25 minutes in seconds
  var startTime = null;
  var elapsedTime = 0;
  var isRunning = false;
  // Function to start the timer
  function startTimer(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    if (isRunning) {
      elapsedTime = timestamp - startTime;
    }

    // Calculate remaining time
    var remainingTime = Math.max(time - Math.floor(elapsedTime / 1000), 0);

    // Calculate minutes and seconds
    var minutes = Math.floor(remainingTime / 60);
    var seconds = remainingTime % 60;

    // Format the time with leading zeros
    var formattedTime =
      ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    // Update the timer element
    timerElement.textContent = formattedTime;

    // Check if the timer has reached 00:00
    if (remainingTime > 0) {
      requestAnimationFrame(startTimer);
    } else {
      // Stylish alert using swal library
      Swal.fire({
        title: "Pomodoro is finished",
        text: "Congrats!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      // Play the alarm sound
      var audio = new Audio("../sounds/mario.wav");
      audio.play();
      timerElement.textContent = "00:00";
    }
  }

  // Event listener for the start button
  startButton.addEventListener("click", function() {
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(startTimer);
    }
  });

  // Event listener for the stop button
  stopButton.addEventListener("click", function() {
    isRunning = false;
    startTime = null;
  });

  // Event listener for the resume button
  resumeButton.addEventListener("click", function() {
    if (!isRunning) {
      isRunning = true;
      startTime = performance.now() - elapsedTime;
      requestAnimationFrame(startTimer);
    }
  });

  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const resetButton = document.getElementById("resetButton");

  // Retrieve tasks from LocalStorage on page load
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render stored tasks
  storedTasks.forEach((task) => {
    createTaskElement(task.text, task.checked);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTaskElement(taskText, false);

      // Store tasks in LocalStorage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text: taskText, checked: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // Clear input field
      taskInput.value = "";
    }
  });

  resetButton.addEventListener("click", () => {
    // Remove all tasks from the task list
    taskList.innerHTML = "";

    // Clear tasks in LocalStorage
    localStorage.removeItem("tasks");
  });

  function createTaskElement(taskText, checked) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    if (checked) {
      taskDiv.classList.add("task-deleted");
    }

    const taskTextDiv = document.createElement("div");
    taskTextDiv.classList.add("task-text");
    taskTextDiv.textContent = taskText;
    taskDiv.appendChild(taskTextDiv);

    const doneIcon = document.createElement("i");
    doneIcon.classList.add("task-icon", "fa", "fa-check-circle");
    if (checked) {
      doneIcon.classList.add("fa-check");
    }
    doneIcon.addEventListener("click", () => {
      taskDiv.classList.toggle("task-deleted");
      doneIcon.classList.toggle("fa-check");
      updateTaskCheckedStatus(
        taskText,
        doneIcon.classList.contains("fa-check")
      );
    });
    taskDiv.appendChild(doneIcon);

    taskList.appendChild(taskDiv);
  }

  function updateTaskCheckedStatus(taskText, checked) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex((task) => task.text === taskText);
    if (taskIndex !== -1) {
      tasks[taskIndex].checked = checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
});
