function createtask(){

    const tasklist = document.getElementById("taskList");
    var input =  document.getElementById("taskInput").value;
    const task = document.createElement("li");
   
    const tickbox = document.createElement("input")
    tickbox.type="checkbox"
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
    
   
}