const loader = document.querySelector(".loader");
const items = document.getElementById("items");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        loader.classList.remove("loader_active");
        const jsonResponse = JSON.parse(xhr.responseText).response.Valute;
        for (const key in jsonResponse) {
            const newElement = document.createElement('div');
            newElement.classList.add("item");
            newElement.innerHTML = `<div class="item__code">
                                        ${jsonResponse[key].CharCode}
                                    </div>
                                    <div class="item__value">
                                    ${jsonResponse[key].Value}
                                    </div>
                                    <div class="item__currency">
                                        руб.
                                    </div>`;
            items.appendChild(newElement);
        }
    };
};