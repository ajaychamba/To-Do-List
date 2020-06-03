var todoList = {
    todos: [],
    displayTodos: function() {
    if (this.todos.length === 0) {
        console.log("Your todo list is empty!");
    } else {
        console.log("My todos:");
        for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
        console.log("(x)", this.todos[i].todoText);
        } else {
        console.log("( )", this.todos[i].todoText);
        }
    }    
    } 
    },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    }
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();
    }
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];       // create variable to make function simpler
      todo.completed = !todo.completed;      // i.e. if todo.completed is false it will equal true
      this.displayTodos();
    }
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // count number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // case 1: if everything is true, make everything false
        if (totalTodos === completedTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        // case 2: otherwise make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
  };

  let displayTodosButton = document.querySelector("#displayTodosButton"); // access display todos button by id
  let toggleAllButton = document.querySelector("#toggleAllButton");

  displayTodosButton.addEventListener("click", function() {      // listens for click, then runs function      
    todoList.displayTodos();                                     
  });

  toggleAllButton.addEventListener("click", function() {
    todoList.toggleAll();
  });