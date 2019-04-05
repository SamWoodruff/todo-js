let todos = [
    {id: 1, text: "Take out trash and recycling", complete: true},
    {id: 2, text: "Pick up dry cleaning", complete: false},
    {id: 3, text: "Get oil change", complete: false},
    {id: 4, text: "Write thank-you notes", complete: false},
];

function getList(){
    var i;
    for(i = 0; i < todos.length; i++){
		document.getElementById('main-todo-list').innerHTML += '<div class="todo"><span class="todo-text"><input type="checkbox" class="todo-checkbox" />' + todos[i].text + '</span></div>';
    }
}

window.onload=getList();