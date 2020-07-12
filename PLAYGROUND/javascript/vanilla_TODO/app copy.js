// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector("todo-list");
console.log("loaded");

// event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(e) {
  console.log("hello");
}
