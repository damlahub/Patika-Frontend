let formDOM = document.querySelector("#userForm")

EventListeners();

function EventListeners() {
    formDOM.addEventListener("submit", FormSubmit)
}

function FormSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let surname = document.querySelector("#surname").value.trim();
    let age = document.querySelector("#age").value.trim();
    let ulDOM = document.querySelector("#result-list");
    let li=document.createElement("li");
    if(name==""|| surname=="" || age==""){
        alert("u");
    }else{
        Add();
    }
    function Add(){
        li.innerHTML = `${name}  ${surname}  ${age}`;
        ulDOM.append(li);
    }
}
