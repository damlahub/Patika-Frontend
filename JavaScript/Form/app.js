let formDOM=document.querySelector("#userForm")

EventListeners();
function EventListeners(){
    formDOM.addEventListener("submit",FormSubmit)
}
function FormSubmit(e){
    e.preventDefault();
    console.log("islem gerceklestirildi");
}