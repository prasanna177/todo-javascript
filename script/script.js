const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('myModal');
const submitBtn = document.getElementById('submitBtn');

addBtn.onclick = () => {
  modal.style.display = "flex";
}

submitBtn.onclick = () => {
  modal.style.display = "none";
}