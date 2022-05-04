const form = document.querySelector("#create-task-form")
    const Task = document.querySelector("#new-task-description")
     const addedTask = document.querySelector("#tasks")
document.addEventListener("DOMContentLoaded", () => {
 
   
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        addTask()
        form.reset()
       })  

      });



const addTask = () => {

  let li = document.createElement('li') ;
  let btn = document.createElement('button')
  li.textContent = `${Task.value} `
  addedTask.appendChild(li)
  btn.textContent = `X`
  addedTask.lastElementChild.appendChild(btn)
  btn.addEventListener("click", deleteTask)
  
  }
const deleteTask = (e) => {
  e.target.parentNode.remove()}

