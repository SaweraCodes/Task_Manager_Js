document.addEventListener("DOMContentLoaded",function(){
    function updateCount(){
        let total=document.querySelectorAll(".task").length;
        let completed=document.querySelectorAll(".task.done").length;
        document.getElementById("count").innerText=
        `${completed} of ${total}tasks completed`;
        }
        updateCount();

        //add task
        document.getElementById("addtask").addEventListener("click",function(){
            let text=document.getElementById("taskinput").value;
            if(text===""){
                alert("please enter a task!");
                return
            };
            let li=document.createElement("li");
            li.className="task";
            li.innerHTML=
            `<div class="left">
             <div class="check"></div>
             <span class="task-text">${text}</span>
             </div>
             <div class="right">
             <img src="chke.png" class"complete icon">
             <img src="delicon.png" class="delete icon">
             </div>`;
            document.getElementById("tasklist").appendChild(li);
            document.getElementById("taskinput").value= "";
            updateCount();
        });

        //check
        document.addEventListener("click",function(e){
            if(e.target.classList.contains("check")
                || e.target.classList.contains("complete")){
                let task=e.target.closest(".task");
                e.target.classList.toggle("active");
                task.querySelector(".task-text").classList.toggle("done");
                task.classList.toggle("done");
                updateCount();
            }
        });
        document.addEventListener("click",function(e){
            if(e.target.classList.contains("delete")){
                e.target.closest(".task").remove();
                updateCount();
            }
        });
        document.getElementById("clearAll").addEventListener("click",function(){
            document.getElementById("tasklist").innerHTML= "";
            updateCount;
        });

});
