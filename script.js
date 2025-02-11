const inputbox = document.getElementById("Input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false );
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();

const placeholders = ["Do laundry", "walk the dog", "Buy groceries", "change oil"];
let index = 0;
const input = document.getElementById("Input-box");

function changePlaceholder() {
    if (input.value === "") {
        input.classList.add("fade"); 
        setTimeout(() => {
            index = (index + 1) % placeholders.length;
            input.placeholder = placeholders[index];
            input.classList.remove("fade"); 
        }, 500);
    }
}

setInterval(changePlaceholder, 2000)

document.getElementById("Input-box")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Click").click();
    }
});
