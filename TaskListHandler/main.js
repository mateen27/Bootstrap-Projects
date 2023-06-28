let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//on submit click events[adding items]
form.addEventListener("submit" , function(e){
    e.preventDefault();
    let item = document.getElementById("item").value;
    //validation check
    if(document.getElementById('item').value==''){
        alert("Add Item field is Empty Bro!");
        return;
    }
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    li.className = "list-group-item";
    let btn = document.createElement("button");
    let btn2 = document.createElement("button");
    // btn.appendChild(document.createTextNode("X"));
    btn.className = "btn btn-primary btn-sm float-right update glyphicon glyphicon-pencil";
    btn2.className = "btn btn-danger btn-sm float-right delete glyphicon glyphicon-trash";
    li.appendChild(btn2);
    li.appendChild(btn);
    itemList.appendChild(li);
    document.getElementById('item').value=''
});

//on edit click events
itemList.addEventListener("click" , function(e){
    let item = document.getElementById("item").value;
    if(e.target.className.includes('update')){
        //validation check
        if(item==''){
            alert("update field is empty!");
            return;
        }
        if(confirm("Are you sure you want to edit this item?")){
            e.target.parentElement.firstChild.textContent = item;
        }
        }
    document.getElementById("item").value=''
})

//on delete 
itemList.addEventListener("click" , function(e){
    if(e.target.className.includes('delete')){
        if(confirm("Are you sure you want to delete this item?")){
            itemList.removeChild(e.target.parentElement)
        }
    }
})

//for searching 
filter.addEventListener("keypress" , function(e){
    let value = e.target.value.toLowerCase();
    let li = document.getElementsByTagName("li");
    //html element to array
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    })
})