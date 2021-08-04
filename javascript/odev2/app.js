function newElement() {
    let task = document.querySelector("#task")

    if(task.value.length > 0) {
        addTodo(task.value)
        addLocalStorage(task.value)
        $('#successToast').toast('show')
    }else{
        $('#errorToast').toast('show')
    }
}

function addTodo(todo) {
    let ul = document.querySelector("#list")
    let li = document.createElement("li");

    li.addEventListener("click",handleClick)

    li.innerHTML = todo
    let btn = document.createElement("button")
    btn.classList.add("btn","btn-sm", "btn-danger", "float-right")
    btn.innerText="X"
    li.appendChild(btn)
    ul.append(li)
}

function handleClick(e){
    let item= e.target
    if(item.classList.contains("btn")){
        item.parentElement.remove();
        removeFromLocalStorage(item.parentElement.childNodes[0].textContent)
    }
    e.target.classList.toggle("checked")
}

function addLocalStorage(item) {
    let localTodos = JSON.parse(localStorage.getItem("todos")) || []
    localTodos.push(item)
    localStorage.setItem("todos",JSON.stringify(localTodos))
}

function removeFromLocalStorage(item){
    todos = JSON.parse(localStorage.getItem("todos"))
    todos.splice(todos.indexOf(item),1)
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodosFromLocalStorage(){
    let todos = JSON.parse(localStorage.getItem("todos"))
    if (todos) {
        todos.forEach(i=> {
            addTodo(i)
        })
    }
}
