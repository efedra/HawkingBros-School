const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    fetch(`https://api.github.com/users/${searchValue}`)
        .then(response => {
            if (response.ok)
            {
                return response.json()
            } else
            {
                throw 'Такого пользователя не существует =('
            }
        }).then((data) => {
            (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
        }
    ).catch((e) => {
        (resultsContainer.innerHTML = `<div class="response-container">
                <p>${e}<p>
            </div>`)
    })

});
