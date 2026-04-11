
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function displaytasks() {
  let text = document.querySelector("#list1");
  text.innerHTML = "";

  let complete=document.querySelector("#list2")
  complete.innerHTML=""

  let pending=document.querySelector("#list3")
  pending.innerHTML=""


  function createElements(task,index){
        let li = document.createElement("li");
    li.innerHTML = task.text+" (Due:"+task.Deadline+")";

    if (task.completed) {
      li.classList.add("completed");
    }
   

    li.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      updateStorage();
      displaytasks();
    };


    let delbtn = document.createElement("button");
    delbtn.innerHTML = "X";
    delbtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      updateStorage();
      displaytasks();
    };


    let edit=document.createElement("button")
    edit.innerHTML="Edit"
    edit.onclick=(e)=>{
     e.stopPropagation()
        let newtext=prompt("Enter new text",task.text)
          if(newtext!==null || newtext.trim()!==""){
            task.text=newtext
            updateStorage()
            displaytasks()
          }
         }

    let btnContainer=document.createElement("div")
    btnContainer.appendChild(edit)
    btnContainer.appendChild(delbtn)
    li.appendChild(btnContainer)
    return li
  }

  let c=0;
  let p=0;
  tasks.forEach((task, index) => {
    let liAll=createElements(task,index)
    text.appendChild(liAll)

    let li2=createElements(task,index)
    if(task.completed){
      c++
      complete.appendChild(li2)
    }
    else{
      pending.appendChild(li2)
      p++
    }

  });

  document.querySelector(".tasksLeft").innerHTML=`Total:${tasks.length} | Completed:${c} | Pending:${p}`
}

document.querySelector(".btn").addEventListener("click", function () {
  let x = document.querySelector(".text").value;
  let y=document.querySelector(".deadline").value;
  if (x === "" || y==="") {
    alert("Add both task and due date");
    return
  }
  tasks.push({ text: x,Deadline:y, completed: false });
  document.querySelector(".text").value=""
  document.querySelector(".deadline").value=""
  updateStorage();
  displaytasks();
});

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function showlist(listId){
  let z=document.querySelectorAll(".list")

  z.forEach((listitem)=>{
    listitem.classList.add("hidden")
  })

  document.getElementById(listId).classList.remove("hidden")
}

document.querySelector(".mode").addEventListener("click",()=>{
 document.querySelector("body").classList.toggle("dark")
})


displaytasks();

window.onload = () => showlist("list1");
