function loadTodos(){
   fetch('https://jsonplaceholder.typicode.com/todos')
   .then(res => res.json())
   .then(data => displayTodos(data))
}
  
function displayTodos(todos){
    const todoContainer = document.getElementById('todos-container');
    for(const todo of todos){
       const todoDiv = document.createElement('div');
       todoDiv.innerHTML = `
       <h3>Title: ${todo.title}</h3>
       <p>User: ${todo.userId}</p>
       <p> Is Completed: ${todo.completed === true ? 'Complete' : 'Not Complete'} </p>
       `;
       todoContainer.appendChild(todoDiv);

    }
}


loadTodos();