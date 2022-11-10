import axios from 'axios';
const loadBtn = document.querySelector(".js-load-axios");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input-axios");

loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    const searchValue = searchInput.value.trim().toLowerCase();
    axios.get(`https://jsonplaceholder.typicode.com/users${searchValue}`)
        .then(res => {
            console.log(res)
            resultsContainer.innerHTML = `<div class="response-container">
                <img src="${res.avatar_url}">
                <p> Имя: <span>${res.name}</span><p>
                <p> О себе: <span>${res.bio}</span><p>
                <p> Кол-во репозиториев: <span>${res.public_repos}</span><p>
            </div>`
        }).catch()

});
