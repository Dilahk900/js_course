let todoList = [];
let newTaskinputElement = document.querySelector('.js-new-task');
let newDateinputElement = document.querySelector('.js-date');
let todoListDisplay = document.querySelector('.js-tasks');


function add_todo(){
  let newTask = newTaskinputElement.value;
  let newDate = newDateinputElement.value;
  todoList.push({newTask, newDate});
  newTaskinputElement.value = '';
  renderTodolist();
}

function renderTodolist(){
  let html = '';
  for(let i = 0 ; i < todoList.length ; i++){
    const todo = todoList[i].newTask;
    const todoD = todoList[i].newDate;
    html += `<div>${todo}</div>
        <div> ${todoD }</div> 
         <button onclick="
         todoList.splice(${i} , 1);
         renderTodolist();
         " class = "dlt-btn">DELETE</button>`;
  }
  todoListDisplay.innerHTML = html;
}