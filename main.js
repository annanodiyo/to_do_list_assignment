const todos = [
    { id: 1, text: 'eat pizza', done: false},
    { id: 2, text: 'eat mango', done: false},
    { id: 3, text: 'eat pineapple', done: false}
];
const todoForm=document.querySelector('.mytask');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const statusText = document.getElementById('statusText');
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
        tasknext.next = todo.done;
        tasknext.addEventListener("change", () => toggleDone(todo.id));

        li.appendChild(tasknext);
        const span=document.createElement('span');
        span.textContent = todo.text;
        li.appendChild(span);

        li.innerHTML = todo.text;
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
  if (!newTodoText) {
    alert("Please enter a valid todo item");
    // return;
  }

  const newTodo = {
    id: todos.length + 1,
    text: newTodoText,
    done: false,
  };

  todos.unshift(newTodo);

  saveTodos();
  renderTodos();

  todoInput.value = "";
}

function toggleDone(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.done = !todo.done;

  saveTodos();
  renderTodos();
}

function removeTodo(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(todoIndex, 1);

  saveTodos();
  renderTodos();
}


// function saveTodos() {
  // localStorage.setItem("todos", JSON.stringify(todos));
// }
