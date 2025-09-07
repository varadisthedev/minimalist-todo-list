//adding itesm to the list (core of TODO)
const list=document.getElementById("ongoing_list")
const taskInput=document.getElementById("taskInput")
const button=document.getElementById("taskbutton")
const on_list=document.getElementById("completed_list")

const adder=()=>{
    const item=document.createElement("li")
    item.textContent = taskInput.value;
    list.appendChild(item)
    //making it so that list item deletes when tapped on them 
    item.addEventListener("click",function(){
        item.remove();
    })
    
    taskInput.value=""
}
//event delegation to check the list items
list.addEventListener("click",(e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});


button.addEventListener("click",adder)
taskInput.addEventListener("keydown",(e)=>{if (e.key=="Enter"){
  adder();
}
})





