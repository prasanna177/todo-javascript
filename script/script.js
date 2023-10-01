const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');
const modal = document.getElementById('myModal');
const submitBtn = document.getElementById('submitBtn');
const closeBtn = document.getElementById('closeBtn');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const inputElement = document.getElementById('todoInput');
const inputDescElement = document.getElementById('todoDescription');
const hiddenIndex = document.getElementById("hiddenIndex");
// const popupDel = document.getElementById('popupDel');

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
  inputElement.value = '';
  inputDescElement.value = '';
  modal.style.display = "flex";
  saveBtn.style.display = "none";
  submitBtn.style.display = "block";
}


/* popup options */
closeBtn.onclick = () => {
  modal.style.display = "none";
}

const deleteTask = (index) => { 
    todoList.splice(index,1);
    renderTodo();
    console.log(todoList);
}

const editTask = (element, index) => {
  modal.style.display = "flex";
  const popupEl = element.parentNode;
  popupEl.style.display = "none";
  const inputElement = document.getElementById('todoInput');
  const inputDescElement = document.getElementById('todoDescription');
  // let name = inputElement.value;
  // const description = inputDescElement.value;
  inputElement.value = todoList[index].todoName;
  inputDescElement.value = todoList[index].todoDescription;
  saveBtn.style.display = "block";
  submitBtn.style.display = "none";
  hiddenIndex.value = index;
  console.log(hiddenIndex.value)
}

saveBtn.onclick = () => {
  const editIndex = hiddenIndex.value;
  console.log(editIndex);
  todoList[editIndex].todoName = inputElement.value;
  todoList[editIndex].todoDescription = inputDescElement.value;
  renderTodo();
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
                <div class = "popup-option" onclick = "editTask(this, ${i})"><p class="popup-option-text">Edit</p></div>
                <div class = "popup-option" onclick = "deleteTask(${i})"><p class="popup-option-text">Delete</p></div>
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
  let name = inputElement.value;
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