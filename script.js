// let list = []

// const taskInput1 = document.getElementById("taskInput")
// const addBtn1 = document.getElementById("add-btn")
// const ulEl = document.getElementById("ulEl")
// const doneBtn = document.getElementById("done-btn")
// const deleteBtn = document.getElementsByClassName("delete-btn")
// const listEl = document.getElementById("list-el")
// let fdg = document.getElementById
// let listItems = ""

// addBtn.addEventListener("click",function(){
    
//     let task = taskInput.value
//     taskInput.value = ""
//     list.push(task)
//     listDisplay()
// })

// doneBtn.addEventListener("click",function(){
//     console.log("clicked")
//     listEl.toggle('liDone')
// })

// deleteBtn



// function listDisplay() {
//     listItems = ""
//     for(let i = 0; i < list.length; i++) {
//         listItems += `<li id="list-el"> ${list[i]}  <button class="delete-btn" >DELETE</button> <button id="done-btn" >DONE</button></li><br>`
//     }
//     ulEl.innerHTML = listItems 
// }

const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
      <button class="deleteBtn">🗑️</button>
      <button class="completeBtn">✅</button>
      
    
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });
}
