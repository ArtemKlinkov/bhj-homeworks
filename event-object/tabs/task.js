const tabsArray = Array.from(document.getElementsByClassName("tab"));
const tabContentArray = Array.from(document.getElementsByClassName("tab__content"));

tabsArray.forEach(element => element.addEventListener("click", tabClick));

function tabClick(event) {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document.querySelector(".tab__content_active").classList.remove("tab__content_active");

    event.currentTarget.classList.add("tab_active");
    tabContentArray[tabsArray.indexOf(event.currentTarget)].classList.add("tab__content_active");

}