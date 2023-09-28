const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');
const modal = document.getElementById('myModal');
const submitBtn = document.getElementById('submitBtn');
const closeBtn = document.getElementById('closeBtn');
const cancelBtn = document.getElementById('cancelBtn');

const popUpclick = (element) => {
  console.log(element);
  const popupEl = element.parentNode.querySelector('.flex-popup');
  console.log(popupEl)
  popupEl.style.display = "flex";
}

const clickCancel = (element) => {
  const cancelEl = element.parentNode;
  cancelEl.style.display = "none";
}

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
    const html = `
          <div class="task">
            <div class="task-name-container">${todoName}<i class="fa-solid fa-ellipsis-vertical" class="popupBtn" onclick = "popUpclick(this)"></i>
              <div class="flex-popup">
                <div class = "popup-option"><p class="popup-option-text">Edit</p></div>
                <div class = "popup-option"><p class="popup-option-text">Delete</p></div>
                <div class = "popup-option" onclick = "clickCancel(this)"><p class="popup-option-text">Cancel</p></div>
              </div>
            </div>
            <div>${todoDescription}</div>
          </div>`
    todoHTML += html;
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

