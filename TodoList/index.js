let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("list");

let searchBtn = document.getElementById("search");

//function for adding task to the List
let ul ;
function AddTaskHandler(e){
    e.preventDefault();
    let addTask = document.getElementById("pencil-add").value;
    if(!(addTask === '')){
        //checking if the ul is already created or not otherwise it will create ul again & again
        if(!ul){
            ul = document.createElement("ul");
            ul.className = "list-group";
            taskList.appendChild(ul)
        }
        let li = document.createElement("li");
        li.className = "list-group-item";
        let btnRemove = document.createElement("button")
        btnRemove.className = "btn btn-danger remove m-2 rounded float-end";
        li.innerText = addTask;
        btnRemove.innerText = "Remove Task";
        let btnEdit = document.createElement("button")
        btnEdit.className = "btn btn-primary m-2 update rounded float-end";
        btnEdit.innerText = "Edit Task";
        li.appendChild(btnRemove);
        li.appendChild(btnEdit);
        ul.appendChild(li);
        document.getElementById("pencil-add").value = '';
    }else{
        alert("Please add some Task! ");
    }
}

//function for removing task from to List
function removeTaskHandler(e){
    // using classList.contains instead of className.includes. This ensures that only the delete buttons trigger the removal logic.
    if(e.target.classList.contains('remove')){
        if(confirm("Are you sure you want to Delete this Task??")){
            //The clicked delete button's parent element, which is the <li> element representing the task, is stored in the listItem variable
            let listItem = e.target.parentElement 
            //The parent element of the listItem, which is the <ul> element with the class "list-group", is stored in the list variable.
            let list = listItem.parentElement
            list.removeChild(listItem)
        }
    }
}

//function for editing the task in the List
function editTaskHandler(e){
    if(e.target.classList.contains("update")){
        let addTask = document.getElementById("pencil-add").value;
        if(addTask === ''){
            alert ("Item cannot be a empty String!");
        }else{
            if(confirm("Are you sure you want to edit your Task?")){
                e.target.parentElement.firstChild.textContent = addTask;
                document.getElementById('pencil-add').value='';
            }
        }
    }
}

//function to search the Task in the List!
function searchTaskHandler(e){
    e.preventDefault(); //default nature of form is to reload the page 
    let searchItem = document.querySelector("#search-item").value.toLowerCase();
    let list = document.querySelectorAll(".list-group-item") //returns Node List
    //converts to an Array and splits multiple items
    Array.from(list).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(searchItem) !== -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    })
}


addBtn.addEventListener("click" , AddTaskHandler);

taskList.addEventListener("click" , (e)=>{
    removeTaskHandler(e);
})
taskList.addEventListener("click" , (e)=>{
    editTaskHandler(e);
})

searchBtn.addEventListener("click" , searchTaskHandler);