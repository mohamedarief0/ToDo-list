
let todos =[];
let btn = document.getElementById('btn')
btn.addEventListener('click', addToDo);

function addToDo(){

    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let dueDate = document.getElementById('dueDate').value;

    let tempObjectToDo = {
        title: title,
        desc: desc,
        dueDate: dueDate,
    }

    todos.push(tempObjectToDo);
    
    checkTodo();
    makeInputBlank();
    sorting();
    renderMyTodo();

    

    
    
    console.log(todos);
}


function checkTodo() {
    
    let notodo = document.getElementById('notodo');
    if (todos.length == 0) {

        notodo.classList.remove('d-none');
        notodo.classList.add('notodo');
        

        
    } else {
        
        notodo.classList.remove('notodo');
        notodo.classList.add('d-none');
    }
    
}

function makeInputBlank() {

    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
    
}


function renderMyTodo() {
    let todoContainer = document.getElementById('todo-container');
    todoContainer.innerText = '';
    todos.map((todo)=>{
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox'
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        
        let title = document.createElement('p');
        title.classList.add('title');
        // adding to display
        title.innerText = todo.title;
        
        let desc = document.createElement('p');
        desc.classList.add('desc');
        // adding to display
        desc.innerText = todo.desc;
        
        let dueDate = document.createElement('p');
        dueDate.classList.add('due');
        // adding to display
        let date = new Date(todo.dueDate);
        const options = {day:'numeric', month:'long', week:'long'};
        let fDate = date.toLocaleDateString('en',options);
        let formatingTime = date.toLocaleTimeString();
        dueDate.innerText = fDate +' '+ formatingTime;
        
        
        
        
        
        todoContainer.appendChild(todoDiv);
        
        todoDiv.appendChild(checkBox);
        todoDiv.appendChild(contentDiv);
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        contentDiv.appendChild(dueDate);
        
    })
    
}

function  sorting(){

    let sorting = todos.sort((a,b)=>{
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);

        if (dateA<dateB){

            return -1
            
        } else if(dateA>dateB){
            return 1
            
        }
        else{
            return 0
        }
    })
    console.log(sorting);
    
}