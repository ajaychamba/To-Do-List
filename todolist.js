let todos = ["item 1", "item 2", "item 3"];

// function to display up to date todo list
function displayTodos() {
    console.log("My Todo List:", todos);
}

// function to add a todo
function addTodo(x) {
    todos.push(x);
    displayTodos();
}

// function to change todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// function to delete todo
funtion deleteTodo (position) {
    todos.splice(position, 1);
    displayTodos();
}