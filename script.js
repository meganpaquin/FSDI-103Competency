let i=0;
let j=10000000;
let b=1000000000000000;
let new_item_title;
let new_item_task;
let the_list = document.getElementById("the_list");
let completed_items = document.getElementById("completed_items_list")

function addnewitem(){
    let new_item_title = document.getElementById("new_item_title").value;
    let new_item_task = document.getElementById("new_item_task").value;

    if(new_item_title === "" || new_item_task === ""){
        alert("Please enter a task title");
    }else{
        i++
        the_list.innerHTML += (`
        <li id="item_number${i}" class="list_item">
            <div class="item_data">
                <h4 id="item_title${i}">${new_item_title}</h4>
                <h5 id="item_description${i}">${new_item_task}</h5>
            </div>
            <div class="item_icons">
                <button onclick="itemcomplete(${i});" class="complete"><i class="fa-solid fa-check check_icon"></i></button>
            </div>
            <div class="item_icons">
                <button onclick="deleteitem(${i});" class="delete"><i class="fa-solid fa-trash-can trash_icon"></i></button>
            </div>
        </li>`)
    }
    return i++
}

function deleteitem(id){
    let remove_item = document.getElementById("item_number"+id);
    remove_item.remove();
}

function itemcomplete(id){
    j--
    let current_title = document.getElementById("item_title"+id).innerHTML;
    let current_description = document.getElementById("item_description"+id).innerHTML;
    let remove_item = document.getElementById("item_number"+id)
    remove_item.remove();

    completed_items.innerHTML += (`
    <li id="item_number${j}" class="list_item_completed">
        <div class="item_data_completed">
            <h4 id="item_title${j}">${current_title}</h4>
            <h5 id="item_description${j}">${current_description}</h5>
        </div>
        <div class="item_icons">
            <button onclick="itemcomplete_reinsert(${j});" class="complete"><i class="fa-solid fa-check check_icon"></i></button>
        </div>
        <div class="item_icons">
            <button onclick="deleteitem(${j});" class="delete"><i class="fa-solid fa-trash-can trash_icon"></i></button>
        </div>
    </li>`)
    return j--
}

function itemcomplete_reinsert(id){
    b--
    let current_title = document.getElementById("item_title"+id).innerHTML;
    let current_description = document.getElementById("item_description"+id).innerHTML;
    let remove_item = document.getElementById("item_number"+id)
    remove_item.remove();

    the_list.innerHTML += (`
    <li id="item_number${b}" class="list_item">
        <div class="item_data">
            <h4 id="item_title${b}">${current_title}</h4>
            <h5 id="item_description${b}">${current_description}</h5>
        </div>
        <div class="item_icons">
            <button onclick="itemcomplete(${b});" class="complete"><i class="fa-solid fa-check check_icon"></i></button>
        </div>
        <div class="item_icons">
            <button onclick="deleteitem(${b});" class="delete"><i class="fa-solid fa-trash-can trash_icon"></i></button>
        </div>
    </li>`)

    return b--
}