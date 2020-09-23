let activeRotator = document.querySelector(".rotator__case_active");
const firstChildRotator = document.querySelector(".rotator").firstElementChild;
const lastChildRotator = document.querySelector(".rotator").lastElementChild;
activeRotator.style.color = activeRotator.dataset.color;

function switchCases() {
    activeRotator.classList.remove("rotator__case_active");  
    if (activeRotator === lastChildRotator) {
        activeRotator = firstChildRotator;
    } else {
        activeRotator = activeRotator.nextElementSibling;
    }
    activeRotator.style.color = activeRotator.dataset.color;
    activeRotator.classList.add("rotator__case_active");
    clearInterval(intervalId);
    intervalId = setInterval(switchCases, activeRotator.dataset.speed);
}

let intervalId = setInterval(switchCases, activeRotator.dataset.speed);
