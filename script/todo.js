let todos = [
    {id: 1, text: "Take out trash and recycling", complete: true},
    {id: 2, text: "Pick up dry cleaning", complete: false},
    {id: 3, text: "Get oil change", complete: false},
    {id: 4, text: "Write thank-you notes", complete: false},
];

const todoList = document.getElementById('main-todo-list');
let show = 1;

function renderTodos(){
    todoList.innerHTML = '';
    todos.forEach(createTodoDiv);
    const remaining = todos.reduce((count, todo) => todo.complete ? count : count + 1, 0);
    document.querySelector('#remaining-count').innerText = remaining;

}


function createTodoDiv(todo){
    if(todo.complete && show == 0){
        return;
    }
    
    const div = document.createElement('div');
    if(todo.complete){
        div.className = 'todo complete';
    }else{
        div.className = 'todo';
    }

    const checkbox = document.createElement('input');
    checkbox.className = 'todo-checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = todo.complete;

    div.appendChild(checkbox);

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.innerText = todo.text;

    div.appendChild(span);

    div.addEventListener('click', (event) => {
        todo.complete = !todo.complete;
        div.className = 'todo';
        renderTodos();
    });
    todoList.appendChild(div);
}

function showCompleted(){
   var status = document.getElementById("status").innerHTML; 
    if(status == "Hide completed items"){
        document.getElementById("status").innerHTML= "Show completed items";
        show = 0;    
    }
    else if(status == "Show completed items"){
        document.getElementById("status").innerHTML= "Hide completed items";
        show = 1;
    }
    renderTodos();
}

function checkItem(e){
	todos[e].complete = !todos[e].complete;
	renderTodos();
    
}

var input = document.getElementById("newTodo");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        var todo = document.getElementById("newTodo").value;
        if(todo != ""){
            todos.push({id: (todos.length + 1), text: todo, complete: false});
            renderTodos();
            document.getElementById("newTodo").value = "";//Reset textbox
        }else{
            alert("You forgot to enter your task!");
        }
    }
});


renderTodos();
