// На различных сайтах можно встретить опцию переключения цветовой темы. Необходимо реализовать возможность выбрать и
// сохранить background-color блока, чтобы даже после закрытия и открытия вкладки, выбранный цвет сохранился.
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const allElements = document.querySelectorAll(".page-wrapper, .results-container")
const toggle = document.querySelector(".switch__input")
let styleSlider = document.querySelector(".switch__slider").style

if (localStorage.getItem('toggle') === "1") {
    allElements.forEach(elem => elem.classList.remove("light-theme-background"))
    allElements.forEach(elem => elem.classList.add("dark-theme-background"))
    toggle.checked = "on"


    let styleSlider = document.querySelector(".switch__slider").style
    styleSlider.background = 'black'
    styleSlider.border = '1px solid white'

}


loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    fetch(`https://api.github.com/users/${searchValue}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
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


toggle.addEventListener('change', function (event) {
    if (toggle.checked) {
        localStorage.setItem("toggle", "1")
        styleSlider.background = 'black'
    } else {
        localStorage.toggle = "0"
         styleSlider.background = "#ccc"

    }
    allElements.forEach(elem => elem.classList.toggle("light-theme-background"))
    allElements.forEach(elem => elem.classList.toggle("dark-theme-background"))
})
