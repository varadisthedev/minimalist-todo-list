//adding itesm to the list (core of TODO)
const list=document.getElementById("ongoing_list")
const taskInput=document.getElementById("taskInput")
const button=document.getElementById("taskbutton")
const c_list=document.getElementById("completed_list")

const adder=()=>{
    const item=document.createElement("li")
    item.textContent = taskInput.value;
    list.appendChild(item)
    //making it so that list item deletes when tapped on them 
    
    taskInput.value=""
}
//event delegation to check the list items
list.addEventListener("click",(e) => {
  if (e.target.tagName === "LI") {
    c_list.appendChild(e.target);
  }
});

const deletion=(e)=>{
  // now e is event obj automaticaly passed by the below call
  if (e.target.tagName==="LI"){
    e.target.remove();
  }
}


//task deletion for completed list
c_list.addEventListener("click",deletion)


button.addEventListener("click",adder)
taskInput.addEventListener("keydown",(e)=>{if (e.key=="Enter"){
  adder();
}
})





