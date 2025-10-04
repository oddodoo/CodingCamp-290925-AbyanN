console.log("Hello, World!");

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");
    const todolist = document.getElementById("todo-list");
}
function renderTodo() {
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li class="border p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
            <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>`;
    });}

function deleteTodo() {
    todos = [];
    renderTodo();
}

function filterTodos() {}

function validateInput(todo, date) {

    if (todo === '' || date === '') {
        
        alert("Please fill in all fields");
        return false;
    }

    return true;
}