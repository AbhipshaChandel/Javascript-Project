let taskcompleted=document.querySelector(".inputs")

function start(){
    let taskcomp=taskcompleted.value.trim()
    if(taskcomp===""){
        alert("Please enter a task")
        return
    }
    let li=document.createElement("li")
    li.textContent=taskcomp

    li.addEventListener("click",()=>{
        li.classList.toggle("completed")
    })

    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="X"
    deleteBtn.classList.add("delete_btn")

    deleteBtn.addEventListener("click",function(e){
        e.stopPropagation()
        li.remove()
    })

    li.appendChild(deleteBtn)
    document.querySelector(".list").appendChild(li)

    taskcompleted.value=""
}

document.querySelector(".done").addEventListener("click",()=>start())
