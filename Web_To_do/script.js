const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("This space must not be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML = "\u2212"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();
const selector = document.querySelector(".select");
selector.addEventListener("change", filterTasks);
function filterTasks(e) {
  const todos = listContainer.childNodes;
  todos.forEach(function (todo) {
    if (e.target.value=='all') {
      todo.style.display = "flex";
    }
    else if(e.target.value=='completed') {
      if (todo.classList.contains("checked")) 
            {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
    }
    else if(e.target.value=='incomplete'){
      if (!todo.classList.contains("checked"))
            {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
    }
  });
}
