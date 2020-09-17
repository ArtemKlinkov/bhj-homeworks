const modalMain = document.querySelector("#modal_main");
modalMain.className += " modal_active";
const modalSuccess = document.querySelector("#modal_success");
const close_modal = Array.from(document.getElementsByClassName("modal__close"));
const success = Array.from(modalMain.getElementsByClassName("show-success"));

function close(){
    modalSuccess.className = "modal";
    modalMain.className = "modal";
}

function show_sucess(){
    modalSuccess.className += " modal_active";
    modalMain.className = "modal";
}

close_modal.forEach(element => element.onclick = close);
success.forEach(element => element.onclick = show_sucess);


