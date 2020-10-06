const pollAnswersList = document.getElementById("poll__answers");
const pollTitle = document.getElementById("poll__title");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange=function(){
    if (xhr.readyState===4){
        const jsonResponse = JSON.parse(xhr.responseText);
        pollTitle.innerText = jsonResponse.data.title;
        jsonResponse.data.answers.forEach(element => {
            const pollAnswerBtn = document.createElement('button');
            pollAnswerBtn.classList.add("poll__answer");
            pollAnswerBtn.innerText = `${element}`;
            pollAnswerBtn.addEventListener("click", function () {alert("Спасибо, ваш голос засчитан!")});
            pollAnswersList.appendChild(pollAnswerBtn);
        });
    };
};