import axios from 'axios';

const loadBtn = document.querySelector(".js-load-axios");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input-axios");

loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    const searchValue = searchInput.value.trim().toLowerCase();
    axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue}`)
        .then(res => {
            console.log(res)
            resultsContainer.innerHTML = `<div class="response-container">
                <p> Никнейм: <span>${res.data.username}</span><p>
                <p> Имя: <span>${res.data.name}</span><p>
                <p> e-mail: <span>${res.data.email}</span><p>
                <p> Телефон: <span>${res.data.phone}</span><p>
                <p> Вебсайт: <span>${res.data.website}</span><p>
            </div>`
        }).catch((e)=>{
        (resultsContainer.innerHTML = `<div class="response-container">
                <p>Такого пользователя не существует. Поиск происходит по id.<p>
            </div>`)
    })

});
