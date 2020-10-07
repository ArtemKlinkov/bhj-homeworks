const signInBtn = document.getElementById("signin__btn");
signInBtn.addEventListener("click", (event) => {

    const formData = new FormData(document.getElementById("signin__form"));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            const jsonResponse = JSON.parse(xhr.response);
            if (jsonResponse.success) {
                localStorage.user_id = jsonResponse.user_id;
                welcome.classList.toggle("welcome_active");
                signinForm.classList.toggle("signin_active");
                userId.innerText = localStorage.user_id;
            }
        };
    }
    xhr.send(formData);
    event.preventDefault();

});

const signinForm = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

if (!localStorage.user_id) {
    signinForm.classList.add("signin_active");
} else {
    welcome.classList.toggle("welcome_active");
    userId.innerText = localStorage.user_id;
}