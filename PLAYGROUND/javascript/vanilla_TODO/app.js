// selectors
const todoInput = $(".todo-input");
const todoButton = $(".todo-button");
const todoList = $(".todo-list");
const todo = $(".todo");
const selectButton = $(".filter-todo");
console.log("loaded");

// event listeners
todoButton.addEventListener("click", addTodo);
selectButton.addEventListener("click", selectList);
todoList.addEventListener("click", deleteTodo);

// functions
function $(selector, container) {
  return (container || document).querySelector(selector);
}

function selectList(e) {
  console.dir(todoList);
  // empty the shit
  const todos = todoList.childNodes;
  const todos1 = todoList.children;
  console.log("_____________________");
  console.dir(typeof todos);
  console.dir(typeof todos1);
  console.log("_____________________");
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function addTodo(e) {
  e.preventDefault();

  // todo idv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create LI
  const todoInputValue = todoInput.value;
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInputValue;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // check mark button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // check button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteTodo(e) {
  console.log(e);
  //console.log(e.target.parentElement.childNodes[0].innerText);
  console.log(e.target);
  console.dir(e.target);
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    console.log("should del");
    console.dir(item);
    const todo = item.parentNode;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    //item.parentNode.remove();
  } else if (item.classList[0] === "complete-btn") {
    console.log("should add");
    item.parentNode.classList.toggle("completed");
  }
}
