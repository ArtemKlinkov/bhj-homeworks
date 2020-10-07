const editor = document.getElementById("editor");
editor.value = localStorage.editorText == undefined ? "" : localStorage.editorText;
editor.addEventListener("keyup", (event) => {
    localStorage.editorText = editor.value;
})

const btnClear = document.getElementById("clear_storage");
btnClear.addEventListener("click", () => {
    localStorage.removeItem("editorText")
    editor.value = "";
});