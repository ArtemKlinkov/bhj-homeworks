const bookControlSize = document.querySelector(".book__control_font-size");
bookControlSize.addEventListener("click", bookControlClick);
const dataBook = document.querySelector(".book");

function bookControlClick(event) {
    event.preventDefault();
    let activeElement  = event.currentTarget.querySelector(".font-size_active");
    activeElement.classList.remove("font-size_active");
    activeElement = event.target;
    activeElement.classList.add("font-size_active");

    const dataSize = activeElement.dataset.size;
    if (dataSize) {
        dataBook.className = `book book_fs-${dataSize}`;
    } else {
        dataBook.className = "book";
    }

}