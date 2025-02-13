const inputbox = document.getElementById("Input-box");
const listContainer = document.getElementById("list-container");
const deleteBtn = document.getElementById("DeleteBtn");

// Function to add a task
function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("delete-task");
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

// Button to delete all tasks with confirmation
function deleteAllTasks() {
    const confirmDelete = confirm("Are you sure that you want to delete all the tasks?");
    if (confirmDelete) {
        listContainer.innerHTML = "";
        localStorage.removeItem("data");
    }
}

deleteBtn.addEventListener("click", deleteAllTasks);

// Function to mark tasks as checked
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Local storage functions
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showtask();

// Dynamic placeholders
const placeholders = ["Do laundry", "Walk the dog", "Buy groceries", "Change oil"];
let index = 0;

function changePlaceholder() {
    if (inputbox.value === "") {
        inputbox.classList.add("fade"); 
        setTimeout(() => {
            index = (index + 1) % placeholders.length;
            inputbox.placeholder = placeholders[index];
            inputbox.classList.remove("fade"); 
        }, 500);
    }
}

setInterval(changePlaceholder, 2000);

// Add task when Enter key is pressed
inputbox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("AddBtn").click();
    }
});
