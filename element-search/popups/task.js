const modalMain = document.querySelector("#modal_main");
modalMain.className += " modal_active";
const modalSuccess = document.querySelector("#modal_success");
const close_modal = Array.from(document.getElementsByClassName("modal__close"));
const success = Array.from(modalMain.getElementsByClassName("show-success"));

function close(){
    this.closest(".modal_active").classList.remove("modal_active");
}

function show_sucess(){
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
}

close_modal.forEach(element => element.onclick = close);
success.forEach(element => element.onclick = show_sucess);


