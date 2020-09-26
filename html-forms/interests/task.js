const checkboxes = Array.from(document.getElementsByClassName("interest__check"));
checkboxes.forEach(element => element.addEventListener("change", setCheckMark));

function setCheckMark(event) {

    const eventTarget = event.target;
    const checkboxChildren = Array.from(eventTarget.closest(".interest").querySelectorAll(".interest__check"));

    checkboxChildren.forEach(element => {if (element !== eventTarget) element.checked = eventTarget.checked});

}