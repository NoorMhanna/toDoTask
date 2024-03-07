

document.querySelector(".btnAdd").onclick = addNewTask;

function addNewTask() {
  var taskInput = document.querySelector(".inputTask");

  if (taskInput.value.trim() == "") {
    alert("Please Enter task");
  }else{
    var list = document.getElementById("tasks");


    var newTask = document.createElement("li");
    newTask.className = "task";
    newTask.innerText = taskInput.value;
  
    newTask.onclick = function () {
      this.classList.toggle("checked");
    };
  
    list.appendChild(newTask);
  
    taskInput.value = "";
  }


}

