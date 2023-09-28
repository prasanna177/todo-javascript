const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');
const modal = document.getElementById('myModal');
const submitBtn = document.getElementById('submitBtn');
const closeBtn = document.getElementById('closeBtn');

delBtn.onclick = () => {
  todoList.splice(0,todoList.length);
  renderTodo();
}

submitBtn.onclick = () => {
  addTodo();
}

addBtn.onclick = () => {
  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const todoList = [];
renderTodo();

function renderTodo() {

  let todoHTML = '';

  for (let i = 0; i<todoList.length;i++) { 
    const todoName = todoList[i].todoName;
    const todoDescription = todoList[i].todoDescription;
    const html = `<div class="task">
            <div class="task-name-container">${todoName}<i class="fa-solid fa-ellipsis-vertical" id="popupBtn"></i><div id="flex-popup">
            <div class = "popup-option">Edit</div>
            <div class = "popup-option">Delete</div>
            <div class = "popup-option">Cancel</div>
            </div></div>
            <div>${todoDescription}</div>
          </div>`
    todoHTML += html;
    
    const popUp = document.getElementById('popupBtn');
    const popUpDisplay = document.getElementById('flex-popup');

    popUp.onclick = () => {
      popUpDisplay.style.display = "flex";
    }
  }

  console.log(todoHTML);
  document.getElementById('tasks-container').innerHTML = todoHTML;
  // document.getElementById('tasks-container').innerHTML = '';
  // document.getElementById('tasks-container').insertAdjacentHTML("beforeend",todoHTML);
}

// add to todo from input
function addTodo() {
  const inputElement = document.getElementById('todoInput');
  const inputDescElement = document.getElementById('todoDescription');
  const name = inputElement.value;
  const description = inputDescElement.value;

  if (name) {
    todoList.push({
      todoName: name,
      todoDescription: description
    })
  }

  else {
    alert('Please add a todo name');
  }
  console.log(todoList);
  inputElement.value = '';
  inputDescElement.value = '';
  renderTodo();
}

