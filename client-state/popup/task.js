const close_modal = Array.from(document.getElementsByClassName("modal__close"));
const modalWindow = document.getElementById("subscribe-modal");

if (!getCookie("wasClosed")) {
    modalWindow.classList.add("modal_active");
}

function close(){
    this.closest(".modal_active").classList.remove("modal_active");
    document.cookie = "wasClosed=true";
}

close_modal.forEach(element => element.onclick = close);

function getCookie(name) {

    const value = "; "+ document.cookie;
    let parts = value.split("; "+ name+ "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}