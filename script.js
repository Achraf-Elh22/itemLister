var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Events
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);


function addItem(e) {
    e.preventDefault();
    // get the calue of new item
    var newItem = document.getElementById("item").value;
    // create li element
    var li = document.createElement("li");
    // add class to li
    li.className = "list-group-item";
    // add textnode to li
    li.appendChild(document.createTextNode(newItem));
    // create removebtn to li
    var removeBtn = document.createElement("button");
    // add class to removeBtn
    removeBtn.className = "btn btn-danger btn-sm float-right delete";
    // add textnode to removeBtn
    removeBtn.appendChild(document.createTextNode("X"));
    // add remove to li as child
    li.appendChild(removeBtn)
    // add li to itemsList
    itemList.appendChild(li);
}

//remove Item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you're sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

// filter Items
function filterItems(e) {
    // convert value to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = document.getElementsByTagName("li");
    // convert item to array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {

            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}