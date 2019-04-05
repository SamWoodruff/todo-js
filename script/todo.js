let todos = [
    {id: 1, text: "Take out trash and recycling", complete: true},
    {id: 2, text: "Pick up dry cleaning", complete: false},
    {id: 3, text: "Get oil change", complete: false},
    {id: 4, text: "Write thank-you notes", complete: false},
];
var count = 0;
function getList(){
    var i;
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
    if (todos[e].complete == false) {
        todos[e].complete = true;
        document.getElementById(e).className = "todo complete";
            count--;
    }else if (todos[e].complete == true) {
        todos[e].complete = false;
        document.getElementById(e).className = "todo";
        count++;
    }
    document.getElementById("remaining-count").innerHTML = count.toString();
}

window.onload=getList();