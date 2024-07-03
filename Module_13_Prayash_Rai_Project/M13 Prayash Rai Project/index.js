document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("input-text");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const addPriorityTaskBtn = document.querySelector(".priority-task-btn");
  const deleteAlltaskBtn = document.querySelector(".delete-all-btn");
  const taskList = document.querySelector("#task-list");

  function createTodoList(task) {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoList = document.createElement("li");
    todoList.classList.add("todo-list");
    todoList.innerText = task;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerText = "Completed";
    completeBtn.addEventListener("click", () => {
      todoList.style.opacity = "0.3";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Deleted";
    deleteBtn.addEventListener("click", () => {
      todoDiv.remove();
    });

    todoDiv.appendChild(todoList);
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
  }

  addTaskBtn.addEventListener("click", addTask);
  addPriorityTaskBtn.addEventListener('click', addPriorityTask);
  deleteAlltaskBtn.addEventListener('click', deleteAlltask);

  function addTask() {
    const task = inputText.value.trim();
    if (task !== "") {
      const todoItem = createTodoList(task);
      taskList.prepend(todoItem);
      inputText.value = "";
    } else {
      alert("Please Enter Task...");
    }
  }

  function addPriorityTask(){
    const task =inputText.value.trim();
    if(task !==''){
      const todoItem = createTodoList(task);
      taskList.prepend(todoItem)
      inputText.value = "";
    }else{
      alert('Please Enter Task...')
    }
  }

  function deleteAlltask(){
    taskList.innerHTML = '';
  }
});
