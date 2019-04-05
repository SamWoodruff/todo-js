let todos = [
    {id: 1, text: "Take out trash and recycling", complete: true},
    {id: 2, text: "Pick up dry cleaning", complete: false},
    {id: 3, text: "Get oil change", complete: false},
    {id: 4, text: "Write thank-you notes", complete: false},
];
function getList(){
    var i;
    var count = 0;//keep track of sum of uncompleted tasks
    for(i = 0; i < todos.length; i++){
		var style;
		if(todos[i].complete == true){
			document.getElementById('main-todo-list').innerHTML += '<div class="todo complete" id="'+ (todos[i].id - 1) +'"><span class="todo-text"><input type="checkbox" onclick="checkItem('+ (todos[i].id - 1) + ')" class="todo-checkbox" checked/>'+ todos[i].text +'</span></div>';
		}else{
			document.getElementById('main-todo-list').innerHTML += '<div class="todo" id="'+ (todos[i].id - 1) +'"><span class="todo-text"><input type="checkbox" onclick="checkItem('+ (todos[i].id - 1) + ')" class="todo-checkbox" />'+ todos[i].text +'</span></div>';
            count++;
		}
    }
    document.getElementById("remaining-count").innerHTML = count.toString();
}

function checkItem(e){
    if (todos[e].complete == false) {//Item is complete
        todos[e].complete = true;
    }else if (todos[e].complete == true){//Item is uncomplete
        todos[e].complete = false;
    }
    document.getElementById('main-todo-list').innerHTML='';
    getList();
}

var input = document.getElementById("newTodo");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        var todo = document.getElementById("newTodo").value;
        if(todo != ""){
            todos.push({id: (todos.length + 1), text: todo, complete: false});
            document.getElementById('main-todo-list').innerHTML='';
			count = 0;
            getList();
            document.getElementById("newTodo").value = "";//Reset textbox
        }else{
            alert("You forgot to enter your task!");
        }
    }
});


window.onload=getList();