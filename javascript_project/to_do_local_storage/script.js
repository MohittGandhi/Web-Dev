document.addEventListener("DOMContentLoaded", () => {
  //grab the task element
  let todoinput = document.getElementById("todo-input");
  let addtaskbtn = document.getElementById("add-task-btn");
  let todolist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => rendertask(task));

  addtaskbtn.addEventListener("click", () => {
    let tasktext = todoinput.value.trim();
    if (tasktext === "") return;

    const newTask = {
      id: Date.now(),
      text: tasktext,
      iscomplete: false,
    };
    tasks.push(newTask);
    savetask();
    rendertask(newTask);
    todoinput.value = ""; //clear the input
  });

  console.log(tasks);

  function rendertask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button id = "deletebtn">delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.iscomplete = !task.iscomplete;
      li.classList.toggle("completed");
      savetask();
    });

    li.querySelector('button').addEventListener('click', (e) =>{
        e.stopPropagation() //prevent toggle from firing
        tasks.filter(t => t.id !== tasks.id)
        li.remove();
        savetask
    })

    todolist.appendChild(li);

    /* const deletebtn = li.querySelector("#deletebtn");
    deletebtn.addEventListener("click", () => {
      const index = tasks.findIndex((t) => t.id === tasks.id);
      tasks.splice(index, 1);
      todolist.removeChild(li);
      savetask();
    }); */
  }

  function savetask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
