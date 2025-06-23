function createtask(){

    const tasklist = document.getElementById("taskList");
    var input =  document.getElementById("taskInput").value;
    const task = document.createElement("li");
   
    const tickbox = document.createElement("input")
    tickbox.type="checkbox"
    tickbox.className="tickbox"
    task.appendChild(tickbox)


    const text = document.createElement("p");
    text.innerText=input
    text.className="task-text"
    task.appendChild(text);

    const Delete = document.createElement("button");
    Delete.innerHTML="Delete"
    Delete.className="delete-btn"
    task.appendChild(Delete);


    tasklist.appendChild(task);
    
     taskno = tasklist.children.length
   document.getElementById("taskleft").innerText= taskno;

   tickbox.addEventListener("change",()=>{
    if(tickbox.checked)
    {
        text.className="completed"
        taskno=taskno-1;
        document.getElementById("taskleft").innerText= taskno;
        
    }
    else{
        text.className="task-text"
        taskno=taskno+1;
        document.getElementById("taskleft").innerText= taskno;
    }
   })
  Delete.addEventListener("click",removetask)

  function removetask() {
    
    task.remove();
      taskno=taskno-1;
     document.getElementById("taskleft").innerText= taskno;

   }
   
  
}

