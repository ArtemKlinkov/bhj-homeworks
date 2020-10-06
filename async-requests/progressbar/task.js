const progressBar = document.getElementById('progress');

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", (event) => {

    const formData = new FormData(document.getElementById("form"));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function(event){
        progressBar.value = event.loaded / event.total;
    }
    xhr.send(formData);
    event.preventDefault();

});