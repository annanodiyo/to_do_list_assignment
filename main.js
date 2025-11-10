const todos = [
  /*{ id: 1, text: 'eat pizza', done: false},
  { id: 2, text: 'eat mango', done: false},
  */
];
const doneTodo = [

]
const todoForm=document.querySelector('.mytasks');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const statusText = document.getElementById('statusText');
const addTaskbtn = document.getElementById('submit');
// addTaskbtn.addEventListener('click',addTodo);
class Todo {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

todoForm.addEventListener('submit', function(e){
  e.preventDefault();
  addTodo();
});
//creating an instance of Todo class

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo => {
      const li = document.createElement('li');
      li.classList.add('todo-item');
      if(todo.done){
          li.classList.add("completed");
      }
      const tasknext = document.createElement("input");
      tasknext.type="checkbox";
      tasknext.checked = todo.done;
      tasknext.addEventListener("change", () => toggleDone(todo.id));

    /*  const editButton = document.createElement("button");
      editButton.textContet ="Edit";
      editButton.addEventListener('click', () => editTodoText(todo.id));
     // li.appendChild(editButton);
     */

      li.appendChild(tasknext);

      const span=document.createElement('span');
      span.textContent = todo.text;
      li.appendChild(span);

      // li.innerHTML = todo.text;
      todoList.appendChild(li);
  }));
  showStatus();
}
renderTodos();
function showStatus() {
if (!todos.length) {
  statusText.textContent = "You have no tasks. 😊😊";
  return;
}

const pending = todos.filter((todo) => !todo.done).length;
if (pending === 0) {
  statusText.textContent = "All done! 🎉";
} else if (pending === 1) {
  statusText.textContent = "1 task remaining";
} else {
  statusText.textContent = `${pending} / ${todos.length} tasks remaining 😬`;
}
}

function addTodo() {
const newTodoText = todoInput.value.trim();
if (newTodoText ==="") {
  alert("Please enter a valid todo item");
  return;
}
const todoItem = new Todo(Date.now(),newTodoText)
todos.unshift(todoItem);

saveTodos();
renderTodos();

todoInput.value = "";
}

function toggleDone(id) {
const index = todos.findIndex((todo) => todo.id === id);
todos[index].done = !todos[index].done;

if(todos[index].done){
  const doneTodo = todos.splice(index,1)
}

saveTodos();
renderTodos();
}


function removeTodo(id) {
const todoIndex = todos.findIndex((todo) => todo.id === id);
todos.splice(todoIndex, 1);

saveTodos();
renderTodos();
}


function saveTodos() {
localStorage.setItem("todos", JSON.stringify(todos));
}
