const nextArrow = document.querySelector(".slider__arrow_next");
const prevArrow = document.querySelector(".slider__arrow_prev");

nextArrow.onclick = sliderSwitch;
prevArrow.onclick = sliderSwitch;


function sliderSwitch() {
    
    const direction = this.className.includes("next") ? 1 : -1;

    const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
    const activeItem = document.querySelector(".slider__item_active");
    const activeIndex = sliderItems.findIndex(element => element === activeItem);
    let index = activeIndex + direction;

    activeItem.className = "slider__item";

    if (index < 0) {
        index = sliderItems.length - 1;
    } else if (index > sliderItems.length - 1) {
        index = 0;
    }

    sliderItems[index].className += " slider__item_active";
}

