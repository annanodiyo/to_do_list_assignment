const todos = [
    { id: 1, text: 'eat pizza', done: false},
    { id: 2, text: 'eat mango', done: false},
    { id: 3, text: 'eat pineapple', done: false}
];

const todoList = document.getElementById('todoList');
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if(todo.done){
            li.classList.add("completed");
        }
        li.innerHTML = todo.text;
        todoList.appendChild(li);
    });
}
renderTodos();
