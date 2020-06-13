var todoList = {
    todos: [],

    // displayTodos: function() {
    // if (this.todos.length === 0) {
        // console.log("Your todo list is empty!");
    // } else {
        // console.log("My todos:");
        // for (var i = 0; i < this.todos.length; i++) {
        // if (this.todos[i].completed === true) {
        // console.log("(x)", this.todos[i].todoText);
        // } else {
        // console.log("( )", this.todos[i].todoText);
 
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    }
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
    }
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];       // create variable to make function simpler
      todo.completed = !todo.completed;      // i.e. if todo.completed is false it will equal true
    }
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // count number of completed todos
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }

        this.todos.forEach(function(todo) {     // iterate over each array, can use todo instead of i
            if (todo.completed === true) {
                completedTodos++;
            }
        });       

        // case 1: if everything is true, make everything false
        // if (completedTodos === totalTodos) {
        // this.todos.forEach(function(todo) {
        //     todo.completed = false;
        // });

        // case 2: otherwise make everything true
        // } else {
        //     this.todos.forEach(function() {
        //         todo.completed = true;
        //         });
        //    }

        this.todos.forEach(function() {
            // case 1: if everything true make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
            // case 2: otherwise make everything true
            todo.completed = true;
            }
        });
    }
};

//   let displayTodosButton = document.querySelector("#displayTodosButton"); // access display todos button by id
//   let toggleAllButton = document.querySelector("#toggleAllButton");

//   displayTodosButton.addEventListener("click", function() {      // listens for click, then runs function      
    // todoList.displayTodos();                                     
//   });                

//   toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
//   });
//   no longer required as using the object below

  var handlers = {                                               // handlers object created to prevent code duplication
    addTodo: function() {
        var addItem = document.querySelector("#addItem");       // selects addItem id in html
        todoList.addTodo(addItem.value);                          
        addItem.value = "";                                    // clears input and sets to empty string
        view.displayTodos();                                  
    },
    changeTodo: function() {                                   // will have two inputs
        var changeTodoPositionInput = document.querySelector("#changeTodoPositionInput");
        var changeTodoTextInput = document.querySelector("#changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value); // number value + string value
        changeTodoPositionInput.valueAsNumber = "";
        changeTodoTextInput.value = "";                        // clears inputs
        view.displayTodos();
    },
    deleteTodo: function(position) {
        //var deleteTodoPositionInput = document.querySelector("#deleteTodoPositionInput");
        todoList.deleteTodo(position);
        // deleteTodoPositionInput = "";
        view.displayTodos();
    },
    toggleTodo: function() {
        var toggleCompletedPositionInput = document.querySelector("#toggleTodoPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueasNumber);
        toggleCompletedPositionInput = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
};


    var view = {
      displayTodos: function() {  
        var todosUl = document.querySelector("ul");             // selected ul within html
        todosUl.innerHTML = "";                                 // clear unordered list 
        for (var i = 0; i < todoList.todos.length; i++) {       // selected ul within html
            var todosLi = document.createElement("li");         // creates list and assigns it to variable
            var todo = todoList.todos[i];                       // simplify code
            var todoTextWithCompletion = "";

            if  (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            } else {
                todoTextWithCompletion = "( )" + todo.todoText;
            }
            
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;        // accessing todoLi property and setting it to todoText property
            todoLi.appendChild(this.createDeleteButton);        // insert delete button to todoLi on page
            todosUl.appendChild(todosLi);                       // insert list(todoLi) into ul(todosUl)
        }
    },
        createDeleteButton: function() {
            var deleteButton  = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "deleteButton";
            return deleteButton;
        },
        setUpEventListeners: function() {
        var todosUl = document.querySelector("ul");

        todosUl.addEventListener("click", function(event) {

        // get the element that was clicked on
        var elementClicked = event.target;

        // check if elementClicked is a delete button
        if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));    // parseInt turns string into number    
            }
        });
    }
};

view.setUpEventListeners();




