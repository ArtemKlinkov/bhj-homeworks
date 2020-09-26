const chatWidgetButton = document.querySelector(".chat-widget__side-text");
const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector( '.chat-widget__messages');
let timerId;

const chatbotAnswers = ["Добрый день! До свидания!",
                        "Мы ничего не будем вам продавать",
                        "К сожалению, все операторы заняты. Не пишите нам больше",
                        "Вы где?",
                        "Где ваша совесть?",
                        "Вы не купили ниодного товара, чтобы так с нами разговаривать!"];

chatWidgetButton.addEventListener("click", chatWidgetButtonClick);

function chatWidgetButtonClick() {
    chatWidget.classList.toggle("chat-widget_active");
    messageInput.focus();
}

const messageInput = document.querySelector(".chat-widget__input");
messageInput.addEventListener("keydown", sendMessage);

function sendMessage(event) {
    
    if (event.code === "Enter" && event.target.value !== "") {

        if (timerId) clearTimeout(timerId); 
        let message = event.target.value;
        const dateTime = new Date();
        const dateTimeParsed = `${dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()}:${dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()}`;
        messages.innerHTML += `
        <div class="message_client">
            <div class="message__time">${dateTimeParsed}</div>
            <div class="message__text">
            ${message}
            </div>
        </div>
        `;
        event.target.value = "";
        messages.closest(".chat-widget__messages-container").scrollTop = messages.scrollHeight;
        setTimeout(sendRandomAnswer, 500);
        
        timerId = setTimeout(sendRandomAnswer, 30000);

    }
}

function sendRandomAnswer() {
    const randomMessage = chatbotAnswers[getRandomIntInclusive(0, chatbotAnswers.length - 1)];
    const dateTime = new Date();
    const dateTimeParsed = `${dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()}:${dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()}`;
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${dateTimeParsed}</div>
            <div class="message__text">
            ${randomMessage}
            </div>
        </div>
        `;
    messages.closest(".chat-widget__messages-container").scrollTop = messages.scrollHeight;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }