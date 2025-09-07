//TODO: add a checkbox for each o_list items, 
//TODO: change the font of list items, maybe add a gray color scheme 
//TODO: add a delete all button


//adding itesm to the list (core of TODO)
const o_list=document.getElementById("ongoing_list")
const c_list=document.getElementById("completed_list")
const taskInput=document.getElementById("taskInput")
const button=document.getElementById("taskbutton")
const c_delete=document.getElementById("c_delete")
const o_delete=document.getElementById("o_delete")


const adder=()=>{
    const item=document.createElement("li")
    item.textContent = taskInput.value;
    o_list.appendChild(item) 
    taskInput.value="" //resetting the input box
}



const c_deletion=()=>{
  //for each element in <ul> "c_list" use the .remove()
  c_list.innerHTML=""; 
}

const o_deletion=()=>{
  //for each element in <ul> "c_list" use the .remove()
  o_list.innerHTML=""; 
}

//event delegation : moving of finished tasks to completed list
o_list.addEventListener("click",(e) => {
  if (e.target.tagName === "LI") {
    c_list.appendChild(e.target); // appenchild moves the child , not a copy
  }
});

//task deletion for completed o_list
button.addEventListener("click",adder)
taskInput.addEventListener("keydown",(e)=>{if (e.key=="Enter"){
  adder();
}
})
c_delete.addEventListener("click",c_deletion)
o_delete.addEventListener("click",o_deletion)





